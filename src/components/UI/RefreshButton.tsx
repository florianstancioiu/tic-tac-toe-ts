import RefreshIcon from "../../images/refresh-icon.png";

const RefreshButton = () => {
  return (
    <button className="bg-silver shadow-box-silver rounded-md size-10 grid place-content-center">
      <img src={RefreshIcon} alt="" />
    </button>
  );
};

export default RefreshButton;
