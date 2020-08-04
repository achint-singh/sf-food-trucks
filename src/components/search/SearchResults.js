import React from "react";
import { getSearchResultItems } from "./utils";

const SearchResults = ({ data }) => {
  return <ul>{getSearchResultItems(data)}</ul>;
};

export default SearchResults;
