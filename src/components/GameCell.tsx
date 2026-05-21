import OMarkImage from "../images/o-mark-light.png";
import XMarkImage from "../images/x-mark-light.png";

export type GameCellProps = {
  value: "x" | "o" | null;
};

const GameCell = ({ value }: GameCellProps) => {
  const showImage = value === null ? false : true;
  const imageType =
    value === "x" ? XMarkImage : value === "o" ? OMarkImage : "";

  return (
    <button
      type="button"
      className="bg-semi-dark-navy shadow-box-dark-navy rounded-2xl w-full h-24 grid place-content-center cursor-pointer"
    >
      {showImage && <img src={imageType} alt="" className="size-10" />}
    </button>
  );
};

export default GameCell;
