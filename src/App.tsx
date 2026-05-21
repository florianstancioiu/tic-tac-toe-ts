import { useState } from "react";
import NewGame from "./components/NewGame";
import Game from "./components/Game";

const App = () => {
  const [inProgress, setInProgress] = useState(true);
  const [versusCpu, setVersusCpu] = useState(false);

  return (
    <>
      {!inProgress && <NewGame />}
      {inProgress && <Game versusCpu={versusCpu} />}
    </>
  );
};

export default App;
