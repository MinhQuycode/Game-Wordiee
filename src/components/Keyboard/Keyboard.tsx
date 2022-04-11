import React from "react";
import Key from "../Key/Key";
import "./keyboard.css";
import { decPos, incPos, incRow, setBoard } from "../../redux/boardSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../interface";
import wordList from "../../words.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Keyboard: React.FC = () => {
  const rows = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"];
  const pos = useSelector((state: RootState) => state.board.pos);
  const board = useSelector((state: RootState) => state.board.board);
  const row = useSelector((state: RootState) => state.board.row);
  const correctWord = useSelector(
    (state: RootState) => state.board.correctWord
  );
  const dispatch = useDispatch();

  let board5words: string = `${board[pos - 5]}${board[pos - 4]}${
    board[pos - 3]
  }${board[pos - 2]}${board[pos - 1]}`.toLocaleLowerCase();

  let allWord: string[] = wordList.words;

  const clickDelete = () => {
    if (Math.floor((pos - 1) / 5) < row) return;
    const newBoard = [...board];
    newBoard[pos - 1] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  };

  const notify = (text: string) => toast(text);

  const clickEnter = () => {
    if (allWord.includes(board5words)) {
      if (pos % 5 === 0 && pos !== 0) {
        dispatch(incRow());
      }
    } else if (!allWord.includes(board5words)) {
      notify("Invalid word");
    }
    if (pos === 30 && allWord.includes(board5words)) {
      notify(`This is correct: ${correctWord}`);
    }
  };
  return (
    <div className="keyboard-container">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      {rows.map((row, idx) => {
        return (
          <div className="row">
            {idx === 2 && (
              <span className="letter-row" onClick={clickEnter}>
                Enter
              </span>
            )}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toLocaleUpperCase()} />
                  {letter === "m" && <span onClick={clickDelete}>Delete</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
