import StatCell from "./UI/StatCell";
import { useTicTacToeContext } from "../context/TicTacToe";

const GameStats = () => {
  const { initialPlayerMark } = useTicTacToeContext();

  return (
    <div className="flex justify-between gap-5 mt-5 text-center uppercase max-w-[32.8rem] mx-auto">
      <StatCell
        className="bg-light-blue"
        title={initialPlayerMark === "x" ? "X (you)" : "O (you)"}
        numericTitle={14}
      />
      <StatCell className="bg-silver" title="Ties" numericTitle={32} />
      <StatCell className="bg-light-yellow" title="O (CPU)" numericTitle={11} />
    </div>
  );
};

export default GameStats;
