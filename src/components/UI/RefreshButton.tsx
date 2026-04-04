import RefreshIcon from '../../images/refresh-icon.png';

const RefreshButton = () => {
  return (
    <button className='bg-silver shadow-box-silver rounded-[1rem] w-[4rem] h-[4rem] grid place-content-center'>
      <img src={RefreshIcon} alt='' />
    </button>
  );
};

export default RefreshButton;
