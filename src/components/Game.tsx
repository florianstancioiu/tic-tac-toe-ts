import GameBoard from "./GameBoard";
import GameTurn from "./GameTurn";
import GameStats from "./GameStats";
import Modal from "./UI/Modal";

export type GameProps = {
  versusCpu: boolean;
};

const Game = ({ versusCpu }: GameProps) => {
  return (
    <div className="pt-6">
      <GameTurn />
      <GameBoard />
      <GameStats />
      {/*
      <Modal
        title='Oh no, you lost...'
        bigTitle='Takes the round'
        bigTitleIcon='o'
        buttonSilverText='Quit'
        buttonYellowText='Next Round'
      />
       */}
    </div>
  );
};

export default Game;
