import { useState } from "react";
import OMarkDarkIcon from "../images/o-mark-dark.png";
import OMarkLightIcon from "../images/o-mark-light-2.png";
import XMarkLightIcon from "../images/x-mark-light.png";
import XMarkDarkIcon from "../images/x-mark-dark.png";

const PickPlayerMark = () => {
  const [pickX, setPickX] = useState(true);

  const chooseX = () => setPickX(true);
  const chooseO = () => setPickX(false);

  return (
    <div className="shadow-box-dark-navy rounded-[10px] mb-8 bg-semi-dark-navy text-center uppercase px-6">
      <h2 className="text-silver mb-6 pt-6 font-bold">Pick Player 1's Mark</h2>
      {pickX ? (
        <div className="mb-4 py-2 rounded-[10px] bg-dark-navy flex h-18 px-2">
          <div
            onClick={chooseX}
            className="w-[50%] bg-silver rounded-2xl grid place-items-center cursor-pointer "
          >
            <img src={XMarkDarkIcon} alt="" className="block mx-auto size-8" />
          </div>
          <div
            onClick={chooseO}
            className="w-[50%] grid place-items-center cursor-pointer "
          >
            <img src={OMarkLightIcon} alt="" className="block mx-auto size-8" />
          </div>
        </div>
      ) : (
        <div className="mb-4 py-2 rounded-[10px] bg-dark-navy flex h-18 px-2">
          <div
            onClick={chooseX}
            className="w-[50%] grid place-items-center cursor-pointer "
          >
            <img src={XMarkLightIcon} alt="" className="block mx-auto size-8" />
          </div>
          <div
            onClick={chooseO}
            className="w-[50%] rounded-2xl bg-silver grid place-items-center cursor-pointer "
          >
            <img src={OMarkDarkIcon} alt="" className="block mx-auto size-8" />
          </div>
        </div>
      )}
      <p className="text-silver pb-6">Remember: X goes first</p>
    </div>
  );
};

export default PickPlayerMark;
