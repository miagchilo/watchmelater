import React, { useContext } from "react";
import { AppContext, PlaylistContext } from "../App";
import styled from "styled-components";
import { SearchVid } from "../fetchFromAPI";
import { UpdatePlaylist } from "../fetchFromAPI";
import useSWR from "swr";
// styles
const VidList = styled.div`
  margin-top: -20px;
  margin-left: 178px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const VidItem = styled.div`
  // background-color: #dcdcdc;
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
  
  list-style: none;
  // color: #735d78;
`;
const VidThumbnail = styled.img`
  width: 100%;
  height: 240px;
  padding-bottom: 20px;
`;
const AddtoList = styled.button`
  margin-top: 10px;
  width: 120px;
  margin-bottom: 20px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid gray;
  background-color: #grey;
  color: #735d78;
  font-size: 15px;
`;
function VideoList() {
  const { searchTerm } = useContext(AppContext);
  const { data: playlistData, playlistId } = useContext(PlaylistContext);

  const { data, error } = useSWR(searchTerm, SearchVid);

  if (error) return <div>failed to load</div>;

  return (
    <VidList>
      {data?.map((video, index) => (
        <VidItem classname="left">
          <li key={index}>
            <VidThumbnail src={video.snippet.thumbnails.url} alt="" />
            {video.title}
            <br />
            <AddtoList
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                const videoList = [...playlistData.videos, video];
                await UpdatePlaylist(playlistId, "", videoList);
              }}
            > ➕
            </AddtoList>
          </li>
        </VidItem>
      ))}
    </VidList>
  );
}

export default VideoList;