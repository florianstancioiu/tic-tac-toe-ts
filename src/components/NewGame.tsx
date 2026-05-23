import Button from "./UI/Button";
import LogoImage from "../images/logo.png";
import PickPlayerMark from "./PickPlayerMark";

const NewGame = () => {
  return (
    <div className="md:max-w-115 md:mx-auto py-30">
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
