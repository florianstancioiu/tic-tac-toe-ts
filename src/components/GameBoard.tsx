import GameCell from "./GameCell";
import { type GameCellProps } from "./GameCell";

export type GameCell = {
  id: number;
  value: GameCellProps["value"];
  col: 0 | 1 | 2;
  row: 0 | 1 | 2;
};
export type GameCells = GameCell[];

const cells: GameCells = [
  {
    id: 1,
    col: 0,
    row: 0,
    value: null,
  },
  {
    id: 2,
    col: 1,
    row: 0,
    value: null,
  },
  {
    id: 3,
    col: 2,
    row: 0,
    value: null,
  },
  {
    id: 4,
    col: 0,
    row: 1,
    value: null,
  },
  {
    id: 5,
    col: 1,
    row: 1,
    value: null,
  },
  {
    id: 6,
    col: 2,
    row: 1,
    value: null,
  },
  {
    id: 7,
    col: 0,
    row: 2,
    value: null,
  },
  {
    id: 8,
    col: 1,
    row: 2,
    value: null,
  },
  {
    id: 9,
    col: 2,
    row: 2,
    value: null,
  },
];

const GameBoard = () => {
  return (
    <div className="grid gap-5 max-w-115 mx-auto grid-cols-3">
      {cells.map((cell) => {
        return <GameCell key={cell.id} value={cell.value} />;
      })}
    </div>
  );
};

export default GameBoard;
