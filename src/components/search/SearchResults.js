import React, { Component } from "react";
import SearchResultItem from "./SearchResultItem";

const data = [
  {
    application: "Rita's Catering",
    locationDescription: "MISSION ST: 06TH ST to 07TH ST (1000 - 1099)",
    distance: 1.2
  },
  {
    application: "Treats by the Bay LLC",
    locationDescription: "HOWARD ST: MALDEN ALY to 02ND ST (574 - 599)",
    distance: 1.5
  }
];

class SearchResults extends Component {
  render() {
    return (
      <ul>
        {data.map((data, itemNum) => (
          <SearchResultItem
            key={itemNum}
            application={data.application}
            locationDesc={data.locationDescription}
            distance={data.distance}
          ></SearchResultItem>
        ))}
      </ul>
    );
  }
}

export default SearchResults;
