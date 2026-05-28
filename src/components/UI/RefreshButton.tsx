import RefreshIcon from "../../images/refresh-icon.png";
import { useTicTacToeContext } from "../../context/TicTacToe";

const RefreshButton = () => {
  const { restartGame } = useTicTacToeContext();

  return (
    <button
      type="button"
      aria-label="Restart Game"
      onClick={() => restartGame()}
      className="bg-silver -translate-y-0.5 transition-all duration-100 shadow-box-silver-refresh rounded-md size-10 grid place-content-center cursor-pointer md:size-13 active:translate-y-0 active:shadow-box-silver-refresh-click hover:bg-slate-100"
    >
      <img src={RefreshIcon} alt="" />
    </button>
  );
};

export default RefreshButton;
