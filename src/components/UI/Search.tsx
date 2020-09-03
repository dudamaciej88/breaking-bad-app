import React, { useState } from "react";

type Props = {
  getQuery: (q: string) => void;
};

const Search: React.FC<Props> = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q: string) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
