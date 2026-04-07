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
    <div className="bg-semi-dark-navy shadow-box-dark-navy rounded-1 w-[9.6rem] h-[9.6rem] md:w-56 md:h-56 grid place-content-center cursor-pointer">
      {showImage && (
        <img
          src={imageType}
          alt=""
          className="w-16 h-16 md:w-[6.4rem] md:h-[6.4rem]"
        />
      )}
    </div>
  );
};

export default GameCell;
