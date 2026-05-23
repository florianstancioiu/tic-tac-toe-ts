import RefreshIcon from "../../images/refresh-icon.png";

const RefreshButton = () => {
  return (
    <button className="bg-silver -translate-y-0.5 transition-all duration-100 shadow-box-silver-refresh rounded-md size-10 grid place-content-center cursor-pointer md:size-13 active:translate-y-0 active:shadow-box-silver-refresh-click">
      <img src={RefreshIcon} alt="" />
    </button>
  );
};

export default RefreshButton;
