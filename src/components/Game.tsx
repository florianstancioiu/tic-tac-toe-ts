import GameBoard from "./GameBoard";
import GameTurn from "./GameTurn";
import GameStats from "./GameStats";
import Modal from "./UI/Modal";

const Game = () => {
  return (
    <div className="pt-[2.4rem] pb-[12.7rem] md:py-[20rem] md:max-w-[46rem] md:mx-auto 2xl:py-[13.8rem]">
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
