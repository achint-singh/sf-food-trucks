import React from "react";
import ReactDOM from "react-dom";
import SearchResults from "./components/search/SearchResults";

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

ReactDOM.render(<SearchResults data={data} />, document.getElementById("root"));
