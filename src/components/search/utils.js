import React from "react";
import SearchResultItem from "./SearchResultItem";

// will add key to the list item when more information is available to define this element
export const getSearchResultItems = data => {
  if (data) {
    return data.map(({ application, locationDescription, distance }) => (
      <SearchResultItem
        application={application}
        locationDesc={locationDescription}
        distance={distance}
      ></SearchResultItem>
    ));
  }
};
