import "./App.css";
import React, { useState, createContext } from "react";
import VideoList from "./components/VideoList";
import { Outlet, useNavigate } from "react-router-dom";
import Form from "./components/Form";
import { CreatePlaylist } from "./fetchFromAPI";
import Search from "./components/Search";
import PlayList from "./components/PlayList";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { GetPlaylist } from "./fetchFromAPI";


export const AppContext = createContext();
export const PlaylistContext = createContext();

function App() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { playlistId } = useParams();
  const { data } = useSWR(playlistId, GetPlaylist, {
    refreshInterval: 3000,
  });

  return (
    <div className="App">   
      <PlaylistContext.Provider value={{ data, playlistId }}>
        <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
       
          <div className="row">
        
            <div className="leftcol">
              <Search />
              <Outlet />
              <VideoList />
            </div>
                <div className="rightcol">
              <Form
                ThisonSubmit={async (name) => {
                  const resId = await CreatePlaylist(name);
                  navigate(`/${resId.id}`);
                }}
              />
              <PlayList />
            </div>
          </div>
        </AppContext.Provider>
      </PlaylistContext.Provider>
    </div>
  );
}

export default App;
