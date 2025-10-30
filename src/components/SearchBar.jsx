import React, { useState } from "react";

const SearchBar = ({ onSearch, onClear }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  const handleClear = () => {
    setInput("");
    onClear();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter an ingredient (e.g., chicken)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default SearchBar;
