export type ButtonProps = {
  title: string;
  color?: "yellow" | "blue" | "silver";
  fullWidth?: boolean;
};

const Button = ({
  title,
  color = "yellow",
  fullWidth = false,
}: ButtonProps) => {
  let colorClasses;

  switch (color) {
    case "yellow":
      colorClasses = "bg-light-yellow shadow-box-light-yellow";
      break;
    case "blue":
      colorClasses = "bg-light-blue shadow-box-light-blue";
      break;
    case "silver":
      colorClasses = "bg-silver shadow-box-silver";
      break;
  }

  return (
    <button
      className={`${colorClasses} ${
        fullWidth ? "w-full" : ""
      } block mb-[1.6rem] uppercase rounded-[10px] font-bold h-14 leading-14 md:h-17 md:leading-17 px-[1.7rem] cursor-pointer`}
    >
      {title}
    </button>
  );
};

export default Button;
