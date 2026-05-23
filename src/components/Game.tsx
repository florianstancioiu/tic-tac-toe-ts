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

  return (
    <div className="pt-6">
      <GameTurn playersTurn={playersTurn} />
      <GameBoard playersTurn={playersTurn} />
      <GameStats />
      {/* 
      
      <Modal
        title="Oh no, you lost..."
        bigTitle="Takes the round"
        bigTitleIcon="o"
        buttonSilverText="Quit"
        buttonYellowText="Next Round"
      />
      */}
    </div>
  );
};

export default Game;
