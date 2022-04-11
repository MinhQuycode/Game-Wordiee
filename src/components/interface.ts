interface boardState {
  board: string[];
  pos: number;
  row: number;
  correctWord: string;
}

export interface RootState {
  board: boardState;
}
