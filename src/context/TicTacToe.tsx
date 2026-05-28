import {
  useContext,
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import initialCells from "../components/utils/initialCells";
import { type GameCellProps } from "../components/GameCell";

export type GameCell = {
  id: number;
  value: GameCellProps["value"];
  col: 0 | 1 | 2;
  row: 0 | 1 | 2;
};

export type PlayerMark = "x" | "o";

export type TicTacToeState = {
  inProgress: boolean;
  setInProgress: Dispatch<SetStateAction<boolean>>;
  versusCpu: boolean;
  setVersusCpu: Dispatch<SetStateAction<boolean>>;
  initialPlayerMark: PlayerMark;
  setInitialPlayerMark: Dispatch<SetStateAction<PlayerMark>>;
  playerMark: PlayerMark;
  setPlayerMark: Dispatch<SetStateAction<PlayerMark>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  cells: GameCell[];
  setCells: Dispatch<SetStateAction<GameCell[]>>;
  restartGame: () => void;
};

const TicTacToeContext = createContext<TicTacToeState | null>(null);

export type TicTacToeContextProviderProps = {
  children: React.ReactNode;
};

export const TicTacToeContextProvider = ({
  children,
}: TicTacToeContextProviderProps) => {
  const [inProgress, setInProgress] = useState(false);
  const [versusCpu, setVersusCpu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [initialPlayerMark, setInitialPlayerMark] = useState<"x" | "o">("x");
  const [playerMark, setPlayerMark] = useState<"x" | "o">("x");
  const [cells, setCells] = useState<GameCell[]>(initialCells);

  const restartGame = () => {
    setCells(initialCells);
    setPlayerMark(initialPlayerMark);
  };

  return (
    <TicTacToeContext.Provider
      value={{
        inProgress,
        setInProgress,
        versusCpu,
        setVersusCpu,
        showModal,
        setShowModal,
        initialPlayerMark,
        setInitialPlayerMark,
        playerMark,
        setPlayerMark,
        cells,
        setCells,
        restartGame,
      }}
    >
      {children}
    </TicTacToeContext.Provider>
  );
};

export const useTicTacToeContext = () => {
  const context = useContext(TicTacToeContext);

  if (!context) {
    throw new Error(
      "useTicTacToeContext must be used within <TicTacToeContextProvider />",
    );
  }

  return context;
};
