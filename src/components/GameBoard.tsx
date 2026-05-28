import GameCell from "./GameCell";
import { useTicTacToeContext } from "../context/TicTacToe";

const GameBoard = () => {
  const { cells } = useTicTacToeContext();

  return (
    <div className="grid gap-5 max-w-115 mx-auto grid-cols-3">
      {cells.map((cell) => {
        return (
          <GameCell
            key={cell.id}
            id={cell.id}
            value={cell.value}
            row={cell.row}
            col={cell.col}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
