import OMarkImage from "../images/o-mark-light.png";
import XMarkImage from "../images/x-mark-light.png";
import XMarkHoverImage from "../images/x-hover-icon.svg";
import OMarkHoverImage from "../images/o-hover-icon.svg";

export type GameCellProps = {
  value: "x" | "o" | null;
  playersTurn: "x" | "o";
};

const GameCell = ({ value, playersTurn }: GameCellProps) => {
  const showImage = value === null ? false : true;
  const imageType =
    value === "x" ? XMarkImage : value === "o" ? OMarkImage : "";

  return (
    <button
      type="button"
      className="bg-semi-dark-navy shadow-box-dark-navy rounded-2xl w-full h-22 pb-2 grid place-content-center cursor-pointer group"
    >
      {showImage && <img src={imageType} alt="" className="size-10" />}
      {!showImage && (
        <>
          {playersTurn === "x" && (
            <img
              src={XMarkHoverImage}
              alt=""
              className="size-10 hidden group-hover:block"
            />
          )}
          {playersTurn === "o" && (
            <img
              src={OMarkHoverImage}
              alt=""
              className="size-10 hidden group-hover:block"
            />
          )}
        </>
      )}
    </button>
  );
};

export default GameCell;
