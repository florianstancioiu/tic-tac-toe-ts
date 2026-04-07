import Button from "./UI/Button";
import LogoImage from "../images/logo.png";
import PickPlayerMark from "./PickPlayerMark";

const NewGame = () => {
  return (
    <div className="pt-48 mb-48 md:py-[27.6rem] md:max-w-184 md:mx-auto 2xl:py-86">
      <img
        src={LogoImage}
        alt="Tic Tac Toe Logo"
        className="block mx-auto mb-8"
      />
      <PickPlayerMark />
      <Button title="New Game (vs CPU)" fullWidth />
      <Button title="New Game (vs Player)" color="blue" fullWidth />
    </div>
  );
};

export default NewGame;
