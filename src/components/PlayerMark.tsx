import OMarkDarkIcon from "../images/o-mark-dark.png";
import OMarkLightIcon from "../images/o-mark-light-2.png";
import XMarkLightIcon from "../images/x-mark-light.png";
import XMarkDarkIcon from "../images/x-mark-dark.png";
import { useTicTacToeContext } from "../context/TicTacToe";

const PickPlayerMark = () => {
  const { initialPlayerMark, setInitialPlayerMark, setPlayerMark } =
    useTicTacToeContext();

  const chooseX = () => {
    setInitialPlayerMark("x");
    setPlayerMark("x");
  };

  const chooseO = () => {
    setInitialPlayerMark("o");
    setPlayerMark("o");
  };

  return (
    <div className="shadow-box-dark-navy rounded-[10px] mb-8 bg-semi-dark-navy text-center uppercase px-6 md:mb-10">
      <h2 className="text-silver mb-6 pt-6 font-semibold leading-[125%] tracking-[1px]">
        Pick Player 1's Mark
      </h2>
      {initialPlayerMark === "x" ? (
        <div className="mb-4 p-2 rounded-[10px] bg-dark-navy flex h-18">
          <button
            type="button"
            onClick={chooseX}
            aria-label="Pick X as player's one mark."
            className="w-[50%] bg-silver rounded-2xl grid place-items-center cursor-pointer "
          >
            <img src={XMarkDarkIcon} alt="" className="block mx-auto size-8" />
          </button>
          <button
            type="button"
            onClick={chooseO}
            aria-label="Pick O as player's one mark."
            className="w-[50%] grid place-items-center cursor-pointer "
          >
            <img src={OMarkLightIcon} alt="" className="block mx-auto size-8" />
          </button>
        </div>
      ) : (
        <div className="mb-4 p-2 rounded-[10px] bg-dark-navy flex h-18">
          <button
            type="button"
            onClick={chooseX}
            aria-label="Pick X as player's one mark."
            className="w-[50%] grid place-items-center cursor-pointer "
          >
            <img src={XMarkLightIcon} alt="" className="block mx-auto size-8" />
          </button>
          <button
            type="button"
            onClick={chooseO}
            aria-label="Pick O as player's one mark."
            className="w-[50%] rounded-2xl bg-silver grid place-items-center cursor-pointer "
          >
            <img src={OMarkDarkIcon} alt="" className="block mx-auto size-8" />
          </button>
        </div>
      )}
      <p className="text-silver pb-6">
        Remember: {initialPlayerMark === "x" ? "X" : "O"} goes first
      </p>
    </div>
  );
};

export default PickPlayerMark;
