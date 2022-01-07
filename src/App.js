import React, { useState, useEffect } from 'react';
import { useRecoilState, atom } from 'recoil';
import './App.css';
import Giph from './util/Giph';
const key = 'qXA4kusyCMAcAkmUDWWLaBCCSJf7e044';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;


function ShowGiph({ giph }) {
  return (
    <img src={giph} height="500px" width="500px" ></img>
  )
}

function RandomButton({ switchGiph }) {
  return (
    <div className="giph-search">
      <h1>Find a Random Giph</h1>
      <button onClick={() => switchGiph()}>Random Giph</button>
    </div>
  )
}

function SearchGiph({ giphSearch }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    giphSearch(value);
    setValue('');
  }
  return (
    <div className="giph-search">
      <h1>Search for Giph</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
          className="input"
          placeholder="Search Giph"
          onChange={e => setValue(e.target.value)}>
        </input>
      </form>
    </div>
  )
}

const giphState = atom({
  key: "giphs",
  default: []
})

function App() {
  const [giph, setGiph] = useRecoilState(giphState);

  const switchGiph = () => {
    Giph.getRandomGiph().then(giph => {
      setGiph(giph);
    });
  }
  const giphSearch = (inputValue) => {
    Giph.getGiph(inputValue).then(giph => {
      setGiph(giph);
    })
  }
  return <div className="app">
    <div className="giphs">
      <div className="search-divs">
        <SearchGiph giphSearch={giphSearch} />
        <h1>-----------OR------------</h1>
        <RandomButton switchGiph={switchGiph} />
      </div>
      <div className="giph-display">
        <ShowGiph giph={giph} />
      </div>
    </div>
  </div>;
}

export default App;;