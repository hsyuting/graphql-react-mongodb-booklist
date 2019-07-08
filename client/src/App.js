import React, { Component } from "react";
//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Ninja's Reading list: </h1>
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default App;
