import React, { SyntheticEvent } from "react";

interface Props {
  search: string;
  handleSearchChange: (s: string) => void;
  onSearchSubmit: (e: SyntheticEvent) => void;
}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <>
      <form onSubmit={props.onSearchSubmit}>
        <input
          value={props.search}
          onChange={(e) => props.handleSearchChange(e.target.value)}
        ></input>
      </form>
    </>
  );
};

export default Search;
