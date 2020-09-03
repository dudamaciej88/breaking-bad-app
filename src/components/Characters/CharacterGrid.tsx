import React from "react";
import CharacterItem, { ItemType } from "./CharacterItem";


type Props = {
  isLoading: boolean;
  items: Array<ItemType>;
};

const CharacterGrid: React.FC<Props> = ({ isLoading, items }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}/>
      ))}
    </section>
  );
};

export default CharacterGrid;
