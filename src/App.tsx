import { useTicTacToeContext } from "./context/TicTacToe";
import GameIntro from "./components/GameIntro";
import Game from "./components/Game";

const App = () => {
  const { inProgress } = useTicTacToeContext();

  return (
    <>
      {!inProgress && <GameIntro />}
      {inProgress && <Game />}
    </>
  );
};

export default App;
