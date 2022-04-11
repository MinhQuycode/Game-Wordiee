import React from "react";
import "./key.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../interface";
import { incPos, setBoard } from "../../redux/boardSlice";
interface IProps {
  letter: string;
}

const Key: React.FC<IProps> = ({ letter }) => {
  const board = useSelector((state: RootState) => state.board.board);
  const pos = useSelector((state: RootState) => state.board.pos);
  const row = useSelector((state: RootState) => state.board.row);
  const dispatch = useDispatch();
  let currentRow = Math.floor(pos / 5);
  const chooseLetter = () => {
    if (pos >= 30) return;
    if (currentRow > row) return;
    console.log(currentRow);
    const newBoard = [...board];
    newBoard[pos] = letter;
    dispatch(setBoard(newBoard));
    dispatch(incPos());
  };

  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
