import { twMerge } from "tailwind-merge";

export type StatCellProps = {
  className: string;
  title: string;
  numericTitle: number;
};

const StatCell = ({ className, title, numericTitle }: StatCellProps) => {
  return (
    <div
      className={twMerge(
        "rounded-2xl w-[9.6rem] py-[1.2rem] select-none",
        className,
      )}
    >
      <p className="text-[12px]">{title}</p>
      <p className="text-[20px] font-bold">{numericTitle}</p>
    </div>
  );
};

export default StatCell;
