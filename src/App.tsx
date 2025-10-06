import React from "react";
import Block from "./components/Block";
import "./App.css"; // Import CSS for grid styling

function App() {
  return (
    <div className="board">
      <div className="row">
        <Block />
        <Block />
        <Block />
      </div>

      <div className="row">
        <Block />
        <Block />
        <Block />
      </div>

      <div className="row">
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
}

export default App;
