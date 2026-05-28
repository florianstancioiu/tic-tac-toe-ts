import OMarkImage from "../images/o-mark-light.png";
import XMarkImage from "../images/x-mark-light.png";
import XMarkHoverImage from "../images/x-hover-icon.svg";
import OMarkHoverImage from "../images/o-hover-icon.svg";
import { useTicTacToeContext } from "../context/TicTacToe";

export type GameCellProps = {
  id: number;
  value: "x" | "o" | null;
  row: 0 | 1 | 2;
  col: 0 | 1 | 2;
};

const GameCell = ({ id, value }: GameCellProps) => {
  const { playerMark, setPlayerMark, cells, setCells } = useTicTacToeContext();
  const showImage = value === null ? false : true;
  const imageType =
    value === "x" ? XMarkImage : value === "o" ? OMarkImage : "";

  const onClickCellHandler = (id: number) => {
    const cellContainsAValue = cells.find(
      (cell) => cell.id === id && cell.value !== null,
    );

    setCells((prevCells) =>
      prevCells.map((cell) => {
        if (cell.id === id && cell.value === null) {
          return { ...cell, value: playerMark };
        }

        return cell;
      }),
    );
    setPlayerMark((prevMark) => {
      if (cellContainsAValue) {
        return prevMark;
      }

      return prevMark === "x" ? "o" : "x";
    });
  };

  return (
    <button
      type="button"
      onClick={() => onClickCellHandler(id)}
      className="transition-all duration-100 bg-semi-dark-navy shadow-box-dark-navy -translate-y-1 rounded-2xl w-full h-22 pb-2 grid place-content-center cursor-pointer group md:h-33 md:pb-2 active:shadow-box-dark-navy-click active:translate-y-0"
    >
      {showImage && (
        <img src={imageType} alt="" className="size-10 md:size-16" />
      )}
      {!showImage && (
        <>
          {playerMark === "x" && (
            <img
              src={XMarkHoverImage}
              alt=""
              className="size-10 hidden group-hover:block group-active:block md:size-16"
            />
          )}
          {playerMark === "o" && (
            <img
              src={OMarkHoverImage}
              alt=""
              className="size-10 hidden group-hover:block group-active:block md:size-16"
            />
          )}
        </>
      )}
    </button>
  );
};

export default GameCell;
