import React, { Component } from "react";

class SearchResultItem extends Component {
  render() {
    return (
      <li>
        Application: {this.props.application}, Location Description:{" "}
        {this.props.locationDesc}, Distance: {this.props.distance}
      </li>
    );
  }
}

export default SearchResultItem;
