import React, { useState, useEffect } from 'react';
import { useRecoilState, atom } from 'recoil';
import './App.css';
import Giph from './util/Giph';
import { randomGiphState as randomGiphAtom, giphState as giphAtom } from './atoms';
console.log(process.env.REACT_APP_API_KEY);

function ShowGiph({ giph }) {
  return (
    <div className="random-giph">
      <h1>RANDOM GIPH</h1>
      <img src={giph} height="300px" width="300px" ></img>;
    </div>
  )
}

function ShowSearchGiph({ giphs }) {
  return (
    giphs.map((giph, index) => {
      return (<div className="search-results">
        <img src={giph} key={index} height="300px" width="300px" ></img>;
      </div>
      )
    })
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
  const [amount, setAmount] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    giphSearch(value, amount);
    setValue('');
    setAmount(0);
  }
  return (
    <div className="giph-search">
      <h1>Search for Giph</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
          className="input"
          placeholder="Search Giph"
          value={value}
          onChange={e => setValue(e.target.value)}>
        </input>
        <input type="number" className="input" onChange={e => setAmount(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}


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
        <ShowGiph giph={giph} />
        <h1>Search Results</h1>
        <ShowSearchGiph giphs={giphs} />
      </div>
    </div>
  </div>;
}

export default App;;