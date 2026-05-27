import Button from "./UI/Button";
import LogoImage from "../images/logo.png";
import PlayerMark from "./PlayerMark";
import { useTicTacToeContext } from "../context/TicTacToe";

const GameIntro = () => {
  const { setInProgress } = useTicTacToeContext();

  return (
    <div className="md:max-w-115 md:mx-auto py-30 md:pt-69.5">
      <img
        src={LogoImage}
        alt="Tic Tac Toe Logo"
        className="block mx-auto mb-8 md:mb-10"
      />
      <PlayerMark />
      <Button
        title="New Game (vs CPU)"
        className="w-full"
        onClick={() => setInProgress(true)}
      />
      <Button
        title="New Game (vs Player)"
        className="w-full bg-light-blue shadow-box-light-blue active:shadow-box-light-blue-click hover:bg-teal-300"
        onClick={() => setInProgress(true)}
      />
    </div>
  );
};

export default GameIntro;
