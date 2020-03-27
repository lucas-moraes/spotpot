import React from "react";
import { withRouter } from "react-router-dom";

const SearchInput = ({ history, searchString = '' }) => {
  return (
    <>
      <input
        value={searchString}
        onChange={e => history.push(`/${e.target.value}`)}
        type="search"
        placeholder="Busque por Artistas"
        aria-label="Search"
      />
    </>
  );
};

export default withRouter(SearchInput);
