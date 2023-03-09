import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PlaylistContext } from "../App";
import { UpdatePlaylist } from "../fetchFromAPI";
import styled from "styled-components";
import Video from "./Video";
//style
const RemoveVidBtn = styled.button`
  margin-left: 2px;
  width: 100px;
  height: 45px;
  border-radius: 50px;
  border: 1px solid gray;
  background-color: #f8f8f8;
  color: #f8f8f8;
  font-size: 17px;
  margin-top: 10px;
`;
const Playbtn = styled.button`
  margin-left: 2px;
  width: 100px;
  height: 45px;
  border-radius: 50px;
  border: 1px solid gray;
  background-color: #f8f8f8;
  color: #f8f8f8;
  font-size: 17px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Vidtitle = styled.p`
  font-size: 20px;
`;
export const Thumbnail = styled.img`
  height: 200px;
  width: 200px;
  padding-right: 40px;
`;
const Playlist = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  width: 100%;
  list-style: none;
  color: #735d78;
  margin-left: -40px;
`;
const PlaylistForm = styled.aside`
  padding-bottom: 50px;
  padding-left: 150px;
  padding-top: 45px;
  border-radius: 50px;
`;
function PlayList() {
  const { playlistId } = useParams();
  const { data } = useContext(PlaylistContext);
  const [index, setIndex] = useState(0);

 

  if (!data || !data.videos) {
    return <p>loading...</p>;
  }

  return (
    <PlaylistForm>
      <Video
        id={data.videos[index]?.id.videoId}
        playNext={() => {
          if (index + 1 < data.videos.length) {
            setIndex(index + 1);
          }
        }}
      />

      <ul>
        {data.videos.map((item, idx) => (
          <Playlist>
            <li key={item.id.videoId}>
              <Row>
                <div className="right-col">
                  <Thumbnail src={item.snippet.thumbnails.url} alt="" />
                </div>
                <div className="left-col">
                  {idx === index && <strong>PLAYING</strong>}

                  <Vidtitle>{item.title}</Vidtitle>
                  <Playbtn
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(idx);
                    }}
                  >
                   📺
                  </Playbtn>
                  <br />
                  <RemoveVidBtn
                    onClick={async (e) => {
                      e.preventDefault();

                      const videoList = data.videos.filter(
                        (idx) => idx !== item
                      );

                      await UpdatePlaylist(playlistId, "", videoList);
                    }}
                  >
                    ➖
                  </RemoveVidBtn>
                </div>
              </Row>
            </li>
          </Playlist>
        ))}
      </ul>
    </PlaylistForm>
  );
}

export default PlayList;