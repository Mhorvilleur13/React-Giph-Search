import React, { useState, useEffect } from "react";

export function SearchGiph({ giphSearch }) {
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    giphSearch(value, amount);
    setValue("");
    setAmount(0);
  };
  return (
    <div className="giph-search">
      <h1>Search for final</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Search Giph"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <input
          type="number"
          className="input"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
