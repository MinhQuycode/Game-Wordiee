import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board/Board";
import Heading from "./components/Heading/Heading";
import { RootState } from "./components/interface";

function App() {
  const board = useSelector((state: RootState) => state.board.board);
  return (
    <div className="App">
      <Heading type="h1" text="Wordiee" />
      <Heading type="desc" text="Another Wordle Clone" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
