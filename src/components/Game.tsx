import { useState } from "react";
import GameBoard from "./GameBoard";
import GameTurn from "./GameTurn";
import GameStats from "./GameStats";
import Modal from "./UI/Modal";
import { useTicTacToeContext } from "../context/TicTacToe";

const Game = () => {
  const { showModal } = useTicTacToeContext();

  return (
    <div className="pt-6 md:max-w-115 md:mx-auto md:pt-50 md:pb-20">
      <GameTurn />
      <GameBoard />
      <GameStats />
      {showModal && (
        <Modal
          title="Oh no, you lost..."
          bigTitle="Takes the round"
          bigTitleIcon="o"
          buttonSilverText="Quit"
          buttonYellowText="Next Round"
        />
      )}
    </div>
  );
};

export default Game;
