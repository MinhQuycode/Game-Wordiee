import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Square from "../Square/Square";
import "./board.css";
interface IProps {
  board: string[];
}
const Board: React.FC<IProps> = ({ board }) => {
  return (
    <>
      <div className="board">
        {board.map((square, idx) => {
          return (
            <>
              <Square val={square} squareIdx={idx} />
            </>
          );
        })}
      </div>
      <div className="keyboard">
        <Keyboard />
      </div>
    </>
  );
};

export default Board;
