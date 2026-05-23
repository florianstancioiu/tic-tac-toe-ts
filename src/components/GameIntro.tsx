import Button from "./UI/Button";
import LogoImage from "../images/logo.png";
import PickPlayerMark from "./PickPlayerMark";

const GameIntro = () => {
  return (
    <div className="md:max-w-115 md:mx-auto py-30 md:pt-69.5">
      <img
        src={LogoImage}
        alt="Tic Tac Toe Logo"
        className="block mx-auto mb-8 md:mb-10"
      />
      <PickPlayerMark />
      <Button title="New Game (vs CPU)" className="w-full" />
      <Button
        title="New Game (vs Player)"
        className="w-full bg-light-blue shadow-box-light-blue active:shadow-box-light-blue-click hover:bg-teal-300"
      />
    </div>
  );
};

export default GameIntro;
