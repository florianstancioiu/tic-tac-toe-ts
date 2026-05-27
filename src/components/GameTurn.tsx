import LogoImage from "../images/logo.png";
import PlayersTurn from "./PlayersTurn";
import RefreshButton from "./UI/RefreshButton";

const GameTurn = () => {
  return (
    <div className="flex justify-between items-center gap-8 mb-10 max-w-115 mx-auto">
      <div>
        <img
          src={LogoImage}
          alt="Tic Tac Toe Logo"
          className="cursor-pointer"
        />
      </div>
      <PlayersTurn />
      <RefreshButton />
    </div>
  );
};

export default GameTurn;
