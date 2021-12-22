import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  submitForm = (item) => {
    console.log(item);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onUserSubmit={this.submitForm} />
      </div>
    );
  }
}

export default App;
