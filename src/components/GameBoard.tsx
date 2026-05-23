import GameCell from "./GameCell";
import { type GameCellProps } from "./GameCell";

export type GameCell = {
  id: number;
  value: GameCellProps["value"];
};
export type GameCells = GameCell[];
export type GameBoardProps = {
  playersTurn: "x" | "o";
};

const cells: GameCells = [
  {
    id: 1,
    value: "o",
  },
  {
    id: 2,
    value: "x",
  },
  {
    id: 3,
    value: null,
  },
  {
    id: 4,
    value: null,
  },
  {
    id: 5,
    value: null,
  },
  {
    id: 6,
    value: null,
  },
  {
    id: 7,
    value: null,
  },
  {
    id: 8,
    value: null,
  },
  {
    id: 9,
    value: null,
  },
];

const GameBoard = ({ playersTurn }: GameBoardProps) => {
  return (
    <div className="grid gap-5 max-w-115 mx-auto grid-cols-3">
      {cells.map((cell) => {
        return (
          <GameCell
            key={cell.id}
            value={cell.value}
            playersTurn={playersTurn}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
