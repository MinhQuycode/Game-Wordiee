import React, { useEffect, useState } from "react";
import "./square.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../interface";

interface Iprops {
  val: string;
  squareIdx: number;
}

const Square: React.FC<Iprops> = ({ val, squareIdx }) => {
  const correctWord = useSelector(
    (state: RootState) => state.board.correctWord
  );
  const pos = useSelector((state: RootState) => state.board.pos);
  const reduxRow = useSelector((state: RootState) => state.board.row);
  // state
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  const wordLastIndex = 4;
  let currentPos =
    pos === 5
      ? wordLastIndex
      : pos > 5 && pos % 5 === 0
      ? wordLastIndex
      : (pos % 5) - 1;

  useEffect(() => {
    if (correctWord[currentPos] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && correctWord.includes(val)) {
      setAlmost(true);
    } else if (!correct && val !== "" && !correctWord.includes(val)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [val]);

  const variants = {
    filled: {
      scale: [1.2, 1],
      trasition: {
        duration: 0.1,
      },
    },
    unfilled: {
      scale: [1.2, 1],
      trasition: {
        duration: 0.1,
      },
    },
  };

  const status: any =
    Math.floor(squareIdx / 5) < reduxRow &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className="square" id={status}>
        {val}
      </div>
    </motion.div>
  );
};

export default Square;
