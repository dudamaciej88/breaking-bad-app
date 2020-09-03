import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/Characters/CharacterGrid";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters`);
      setItems(result.data);
      setIsLoading(false);
      console.log(result.data);
    };
    fetchItems();
  },[]);

  return (
    <div className="App">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
