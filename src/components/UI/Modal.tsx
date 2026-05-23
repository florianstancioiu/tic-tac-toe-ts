import { createPortal } from "react-dom";

import Button from "./Button";
import OMarkLightIcon from "../../images/o-mark-light.png";
import XMarkLightIcon from "../../images/x-mark-light.png";

export type ModalProps = {
  title?: string;
  bigTitle: string;
  bigTitleIcon: "x" | "o" | null;
  buttonSilverText: string;
  buttonYellowText: string;
};

const Modal = ({
  title,
  bigTitle,
  bigTitleIcon = null,
  buttonSilverText,
  buttonYellowText,
}: ModalProps) => {
  let bigTitleImage: React.ReactNode | string = "";

  switch (bigTitleIcon) {
    case "x":
      bigTitleImage = (
        <img src={XMarkLightIcon} alt="" className="size-12 md:size-16" />
      );
      break;
    case "o":
      bigTitleImage = (
        <img src={OMarkLightIcon} alt="" className="size-12 md:size-16" />
      );
      break;
    default:
      bigTitleImage = "";
      break;
  }

  return createPortal(
    <div className="absolute left-0 top-0 w-full h-full">
      <div className="absolute opacity-[0.5] bg-black h-full w-full"></div>
      <div className="absolute top-[50%] translate-y-[-50%] w-full bg-semi-dark-navy">
        <div className="text-center max-w-md md:max-w-3xl mx-auto relative z-2 w-full pt-16 pb-8 md:pt-18 md:pb-18 px-6">
          {title !== undefined && title.length !== 0 && (
            <p className="uppercase text-silver text-sm text-bold mb-4 md:text-base md:mb-5.5">
              {title}
            </p>
          )}
          <div
            className={`${
              bigTitleIcon === "o" ? "text-light-yellow" : "text-silver"
            } uppercase text-[24px] md:text-[40px] text-bold mb-8 md:mb-12 flex gap-3 items-center justify-center`}
          >
            {bigTitleImage}
            <span>{bigTitle}</span>
          </div>
          <div className="flex justify-evenly gap-4 md:justify-center">
            <Button
              title={buttonSilverText}
              className="bg-silver shadow-box-silver active:shadow-box-light-blue-click"
            />
            <Button title={buttonYellowText} />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-root")!,
  );
};

export default Modal;
