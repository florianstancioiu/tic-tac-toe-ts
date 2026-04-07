export type StatCellProps = {
  bgColor: string;
  title: string;
  numericTitle: number;
};

const StatCell = ({ bgColor, title, numericTitle }: StatCellProps) => {
  return (
    <div className={`${bgColor} rounded-2xl w-[9.6rem] md:w-56 py-[1.2rem]`}>
      <p className="text-[1.2rem] md:text-[1.4rem]">{title}</p>
      <p className="text-[2rem] font-bold md:text-[2.4rem]">{numericTitle}</p>
    </div>
  );
};

export default StatCell;
