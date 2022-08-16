import React, { useState, useCallback } from "react";
import Seacrh from "./components/Search";
import List from "./components/List";

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchSubmit = useCallback((query) => {
    setSearchQuery(query);
  }, [setSearchQuery]);

  return (
    <div className="app">
        <h2>GitHub Search</h2>
        <Seacrh submit={searchSubmit}/>
        {searchQuery && <List searchQuery={searchQuery} />}
    </div>
  );
}

export default App;
