import { useState } from "react";
import GameBoard from "./GameBoard";
import GameTurn from "./GameTurn";
import GameStats from "./GameStats";
import Modal from "./UI/Modal";

export type GameProps = {
  versusCpu: boolean;
};

const Game = ({ versusCpu }: GameProps) => {
  const [playersTurn, setPlayersTurn] = useState<"x" | "o">("x");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="pt-6 md:max-w-115 md:mx-auto md:pt-50 md:pb-20">
      <GameTurn playersTurn={playersTurn} />
      <GameBoard playersTurn={playersTurn} />
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
