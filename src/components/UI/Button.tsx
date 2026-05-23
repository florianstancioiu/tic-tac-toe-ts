import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  title: string;
  className?: string;
};

const Button = ({ title, className = "" }: ButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        "bg-light-yellow -translate-y-1 shadow-box-light-yellow transition-all duration-200 block mb-[1.6rem] uppercase rounded-[10px] font-bold h-14 leading-14 md:h-17 md:leading-17 px-[1.7rem] cursor-pointer active:translate-y-0 active:shadow-box-light-yellow-click hover:bg-amber-300",
        className,
      )}
    >
      {title}
    </button>
  );
};

export default Button;
