import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/Characters/CharacterGrid";
import Search from "./components/UI/Search";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q: string) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
