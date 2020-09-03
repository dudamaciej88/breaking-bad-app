import React from "react";
import CharacterItem, { ItemType } from "./CharacterItem";
import Spinner from "../UI/Spinner";

type Props = {
  isLoading: boolean;
  items: Array<ItemType>;
};

const CharacterGrid: React.FC<Props> = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
