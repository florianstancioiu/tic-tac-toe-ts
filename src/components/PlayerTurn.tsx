import smallXIcon from "../images/small-x-icon.png";
import smallOIcon from "../images/small-o-icon.png";

export type PlayerTurnProps = {
  turn: "x" | "o";
};

const PlayerTurn = ({ turn }: PlayerTurnProps) => {
  const imageType = turn === "x" ? smallXIcon : smallOIcon;

  return (
    <div className="flex items-center justify-center bg-semi-dark-navy shadow-box-dark-navy rounded-2xl h-16 w-[9.6rem] md:w-56 md:h-[5.2rem] md:leading-[5.2rem] pb-4 leading-16 ml-[-2.6rem]">
      <img src={imageType} alt="" className="mr-[0.9rem]" />
      <p className="text-silver uppercase">Turn</p>
    </div>
  );
};

export default PlayerTurn;
