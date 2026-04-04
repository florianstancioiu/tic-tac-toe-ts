import OMarkImage from '../images/o-mark-light.png';
import XMarkImage from '../images/x-mark-light.png';

const GameCell = ({ value }) => {
  const showImage = value === null ? false : true;
  const imageType =
    value === 'x' ? XMarkImage : value === 'o' ? OMarkImage : '';

  return (
    <div className='bg-semi-dark-navy shadow-box-dark-navy rounded-[1rem] w-[9.6rem] h-[9.6rem] md:w-[14rem] md:h-[14rem] grid place-content-center cursor-pointer'>
      {showImage && (
        <img
          src={imageType}
          alt=''
          className='w-[4rem] h-[4rem] md:w-[6.4rem] md:h-[6.4rem]'
        />
      )}
    </div>
  );
};

export default GameCell;
