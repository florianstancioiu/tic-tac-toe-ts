import smallXIcon from "../images/small-x-icon.png";
import smallOIcon from "../images/small-o-icon.png";

export type PlayersTurnProps = {
  playersTurn: "x" | "o";
};

const PlayersTurn = ({ playersTurn }: PlayersTurnProps) => {
  const imageType = playersTurn === "x" ? smallXIcon : smallOIcon;

  return (
    <div className="flex items-center justify-center gap-2.5 bg-semi-dark-navy shadow-box-dark-navy rounded-md h-10 w-24 -ml-8 pb-2">
      <img src={imageType} alt="" />
      <p className="text-silver uppercase">Turn</p>
    </div>
  );
};

export default PlayersTurn;
