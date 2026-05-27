import smallXIcon from "../images/small-x-icon.png";
import smallOIcon from "../images/small-o-icon.png";
import { useTicTacToeContext } from "../context/TicTacToe";

const PlayersTurn = () => {
  const { playerMark } = useTicTacToeContext();
  const imageType = playerMark === "x" ? smallXIcon : smallOIcon;

  return (
    <div className="flex items-center justify-center gap-2.5 bg-semi-dark-navy shadow-box-dark-navy rounded-md h-10 w-24 -ml-8 pb-2 md:h-13 select-none">
      <img src={imageType} alt="" />
      <p className="text-silver uppercase">Turn</p>
    </div>
  );
};

export default PlayersTurn;
