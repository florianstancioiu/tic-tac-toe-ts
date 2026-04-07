import GameCell from "./GameCell";
import { type GameCellProps } from "./GameCell";

export type GameCell = GameCellProps["value"];
export type GameCells = GameCell[][];

const cells: GameCells = [
  [null, "x", "o"],
  ["x", "o", "x"],
  [null, "o", "x"],
];

const GameBoard = () => {
  return (
    <div className="grid gap-8 max-w-[32.8rem] mx-auto md:mx-[initial]">
      {cells.map((row, index) => (
        <div key={index} className="flex gap-8 justify-between">
          {row.map((cell, index) => {
            return <GameCell key={index} value={cell} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
