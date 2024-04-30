import React, { useEffect, useState } from "react";

function Search({ searchFunction }) {

  function handleSearchTransaction(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const [search, setSearch] = useState("");

  /*useEffect(function() {
    searchFunction(search);
  }, [search]);*/

  useEffect(function() {
    searchFunction(search);
  }, [search, searchFunction]);


  return (
    <form className="d-flex">
      <input
        className="form-control"
        type="text"
        placeholder="Search transactions"
        onChange={handleSearchTransaction}
        id="search"
      />
      <button className="btn btn-outline-info ms-1" id="searchBtn">
        SEARCH
      </button>
    </form>
  );
}

export default Search;
