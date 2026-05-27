import {
  useContext,
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export type TicTacToeState = {
  inProgress: boolean;
  setInProgress: Dispatch<SetStateAction<boolean>>;
  versusCpu: boolean;
  setVersusCpu: Dispatch<SetStateAction<boolean>>;
  initialPlayerMark: "x" | "o";
  setInitialPlayerMark: Dispatch<SetStateAction<"x" | "o">>;
  playerMark: "x" | "o";
  setPlayerMark: Dispatch<SetStateAction<"x" | "o">>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
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
