import React from "react";

const SearchResultItem = ({ application, locationDesc, distance }) => {
  const itemDisplayText = `Application: ${application}, Location Description: ${locationDesc}, Distance:${" "}
  ${distance}`;

  return <li>{itemDisplayText}</li>;
};

export default SearchResultItem;
