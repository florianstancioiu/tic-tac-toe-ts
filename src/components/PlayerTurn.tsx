import smallXIcon from '../images/small-x-icon.png';
import smallOIcon from '../images/small-o-icon.png';

const PlayerTurn = ({ turn }) => {
  const imageType = turn === 'x' ? smallXIcon : smallOIcon;

  return (
    <div className='flex items-center justify-center bg-semi-dark-navy shadow-box-dark-navy rounded-[1rem] h-[4rem] w-[9.6rem] md:w-[14rem] md:h-[5.2rem] md:leading-[5.2rem] pb-[1rem] leading-[4rem] ml-[-2.6rem]'>
      <img src={imageType} alt='' className='mr-[0.9rem]' />
      <p className='text-silver uppercase'>Turn</p>
    </div>
  );
};

export default PlayerTurn;
