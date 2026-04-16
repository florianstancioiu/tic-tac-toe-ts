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
    <div className="shadow-box-dark-navy rounded-[10px] mb-[3.2rem] bg-semi-dark-navy text-center uppercase px-[2.4rem]">
      <h2 className="text-silver mb-[2.4rem] pt-[2.4rem] font-bold">
        Pick Player 1's Mark
      </h2>
      {pickX ? (
        <div className="mb-[1.6rem] py-2 rounded-[10px] bg-dark-navy flex h-[7.2rem] px-2">
          <div
            onClick={chooseX}
            className="w-[50%] bg-silver rounded-2xl grid place-items-center cursor-pointer "
          >
            <img
              src={XMarkDarkIcon}
              alt=""
              className="block mx-auto w-[3.2rem] h-[3.2rem]"
            />
          </div>
          <div
            onClick={chooseO}
            className="w-[50%] grid place-items-center cursor-pointer "
          >
            <img
              src={OMarkLightIcon}
              alt=""
              className="block mx-auto w-[3.2rem] h-[3.2rem]"
            />
          </div>
        </div>
      ) : (
        <div className="mb-[1.6rem] py-2 rounded-[10px] bg-dark-navy flex h-[7.2rem] px-2">
          <div
            onClick={chooseX}
            className="w-[50%] grid place-items-center cursor-pointer "
          >
            <img
              src={XMarkLightIcon}
              alt=""
              className="block mx-auto w-[3.2rem] h-[3.2rem]"
            />
          </div>
          <div
            onClick={chooseO}
            className="w-[50%] rounded-2xl bg-silver grid place-items-center cursor-pointer "
          >
            <img
              src={OMarkDarkIcon}
              alt=""
              className="block mx-auto w-[3.2rem] h-[3.2rem]"
            />
          </div>
        </div>
      )}
      <p className="text-silver opacity-[0.5] pb-12">Remember: X goes first</p>
    </div>
  );
};

export default PickPlayerMark;
