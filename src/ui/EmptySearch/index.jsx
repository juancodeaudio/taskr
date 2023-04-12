import React from "react";
import "./EmptySearch.css";

function EmptySearch({ searchText }) {
  return (
    <div className="emptySearch-container">
      <div className="emptySearch-image"></div>
      <h3>Ups! Nothing found</h3>
      <p>There are no results for {searchText}</p>
    </div>
  );
}

export { EmptySearch };
