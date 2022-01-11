import React, { useState, useEffect } from 'react';
import { useRecoilState, atom } from 'recoil';
import './App.css';
import Giph from './util/Giph';
import { randomGiphState as randomGiphAtom, giphState as giphAtom } from './atoms';
import { ShowRandomGiph } from '../src/Random-Giph/Random-Giph';
import { ShowSearchGiph } from './Search-Giph_Display/SearchedGiph';
import { RandomButton } from '../src/SearchBar/SearchRandom';
import { SearchGiph } from '../src/SearchBar/SearchGiph';


function App() {
  const [giph, setRandomGiph] = useRecoilState(randomGiphAtom);
  const [giphs, setGiph] = useRecoilState(giphAtom);

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
  return <div className="app">
    <div className="giphs">
      <div className="search-divs">
        <SearchGiph giphSearch={giphSearch} />
        <h1>-----------OR------------</h1>
        <RandomButton switchGiph={switchGiph} />
      </div>
      <div className="giph-display">
        <ShowRandomGiph giph={giph} />
        <div className="search-results">
          <h1>SEARCH RESULTS</h1>
          <ShowSearchGiph giphs={giphs} />
        </div>
      </div>
    </div>
  </div>;
}

export default App;;