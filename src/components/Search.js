import React, { useEffect, useState } from "react";

function Search({ searchFunction }) {
  // State to hold the search input value
  const [search, setSearch] = useState("");

  // useEffect hook to trigger the searchFunction when search input changes
  useEffect(function () {
    searchFunction(search);
  }, [search]);

  // Function to handle search input change
  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  // Render the component
  return (
    <form className="d-flex">
      <input
        className="formcontrol"
        type="text"
        placeholder="Search transactions"
        onChange={handleSearch}
        id="search"
      />
      <button className="btn btn-outline-info ms-1" id="searchBtn">
        SEARCH
      </button>
    </form>
  );
}

export default Search;
