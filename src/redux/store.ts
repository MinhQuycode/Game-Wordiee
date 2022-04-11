import { configureStore } from "@reduxjs/toolkit";
import BoardReducer from "./boardSlice";

export default configureStore({
  reducer: {
    board: BoardReducer,
  },
});
