import React, { useState, useEffect } from 'react';
import { useRecoilState, atom } from 'recoil';
import './App.css';
import Giph from './util/Giph';
import { randomGiphState as randomGiphAtom, giphState as giphAtom, giphPlaylistState as playlistAtom } from './atoms';
import { ShowRandomGiph } from '../src/RandomGiph/RandomGiph';
import { ShowSearchGiph } from './SearchGiphDisplay/SearchedGiph';
import { RandomButton } from '../src/SearchBar/SearchRandom';
import { SearchGiph } from '../src/SearchBar/SearchGiph';
import { GiphPlaylist } from '../src/GiphPlayList/GiphPlayList';


function App() {
  const [giph, setRandomGiph] = useRecoilState(randomGiphAtom);
  const [giphs, setGiph] = useRecoilState(giphAtom);
  const [giphPlaylist, setGiphPlaylist] = useRecoilState(playlistAtom);

  const switchGiph = () => {
    Giph.getRandomGiph().then(giph => {
      setRandomGiph(giph);
    });
  }
  const giphSearch = (inputValue, amount) => {
    Giph.getGiph(inputValue, amount).then(giph => {
      setGiph(giph);
    });
  }
  const removeGiph = (giphToRemove) => {
    const newGiphPlaylist = [...giphPlaylist];
    let finalList = newGiphPlaylist.filter(giph => giph !== giphToRemove);
    setGiphPlaylist(finalList);
  }

  const addGiph = (giphToAdd) => {
    const newGiphPlaylist = [...giphPlaylist];
    newGiphPlaylist.push(giphToAdd);
    setGiphPlaylist(newGiphPlaylist);
  }
  return <div className="app">
    <div className="giphs">
      <div className="search-divs">
        <SearchGiph giphSearch={giphSearch} />
        <h1>-----------OR------------</h1>
        <RandomButton switchGiph={switchGiph} />
        <h1>Click on the Giph to Save</h1>
      </div>
      <div className="giph-display">
        <ShowRandomGiph giph={giph} addGiph={addGiph} />
        <div className="search-results">
          <h1>SEARCH RESULTS</h1>
          <ShowSearchGiph giphs={giphs} addGiph={addGiph} />
        </div>
      </div>
      <div className="playlist">
        <h1>Playlist</h1>
        <GiphPlaylist giphPlaylist={giphPlaylist} removeGiph={removeGiph} />
      </div>
    </div>
  </div>;
}

export default App;;