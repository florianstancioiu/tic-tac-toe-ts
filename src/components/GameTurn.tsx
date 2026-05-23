import LogoImage from "../images/logo.png";
import PlayersTurn from "./PlayersTurn";
import RefreshButton from "./UI/RefreshButton";

export type GameTurnProps = {
  playersTurn: "x" | "o";
};

const GameTurn = ({ playersTurn }: GameTurnProps) => {
  return (
    <div className="flex justify-between items-center gap-8 mb-10 max-w-115 mx-auto">
      <div>
        <img
          src={LogoImage}
          alt="Tic Tac Toe Logo"
          className="cursor-pointer"
        />
      </div>
      <PlayersTurn playersTurn={playersTurn} />
      <RefreshButton />
    </div>
  );
};

export default GameTurn;
