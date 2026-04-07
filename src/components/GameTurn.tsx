import LogoImage from "../images/logo.png";
import PlayerTurn from "./PlayerTurn";
import RefreshButton from "./UI/RefreshButton";

const GameTurn = () => {
  return (
    <div className="flex justify-between gap-8 mb-[6.4rem] md:mb-8 max-w-[32.8rem] mx-auto md:mx-[initial] md:max-w-full">
      <div>
        <img
          src={LogoImage}
          alt="Tic Tac Toe Logo"
          className="cursor-pointer"
        />
      </div>
      <PlayerTurn turn="x" />
      <RefreshButton />
    </div>
  );
};

export default GameTurn;
