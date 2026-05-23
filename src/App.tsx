import { useState } from "react";
import GameIntro from "./components/GameIntro";
import Game from "./components/Game";

const App = () => {
  const [inProgress, setInProgress] = useState(false);
  const [versusCpu, setVersusCpu] = useState(false);

  return (
    <>
      {!inProgress && <GameIntro />}
      {inProgress && <Game versusCpu={versusCpu} />}
    </>
  );
};

export default App;
