import React, { useEffect } from "react";
import "./TodoSearch.css";
import { useSearchParams } from "react-router-dom";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const [params, setParams] = useSearchParams();

  const onSearchValueChange = (event) => {
    console.log(event.target.value);

    setSearchValue(event.target.value);
    let params = {
      search: event.target.value,
    };
    setParams(params);
  };

  useEffect(() => {
    const search = params.get("search") ?? "";
    setSearchValue(search);
  }, [params]);

  return (
    <input
      className="TodoSearch"
      placeholder="Search..."
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
