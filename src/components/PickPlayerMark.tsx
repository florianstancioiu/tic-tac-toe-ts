import OMarkDarkIcon from '../images/o-mark-dark.png';
import XMarkLightIcon from '../images/x-mark-light.png';

const PickPlayerMark = () => {
  return (
    <div className='shadow-box-dark-navy rounded-[10px] mb-[3.2rem] bg-semi-dark-navy text-center uppercase px-[2.4rem]'>
      <h2 className='text-silver mb-[2.4rem] pt-[2.4rem] font-bold'>
        Pick Player 1's Mark
      </h2>
      <div className='mb-[1.6rem] py-[0.9rem] rounded-[10px] bg-dark-navy flex h-[7.2rem]'>
        <div className='w-[50%] grid place-items-center cursor-pointer'>
          <img
            src={XMarkLightIcon}
            alt=''
            className='block mx-auto w-[3.2rem] h-[3.2rem]'
          />
        </div>
        <div className='w-[50%] rounded-[1rem] bg-silver grid place-items-center cursor-pointer'>
          <img
            src={OMarkDarkIcon}
            alt=''
            className='block mx-auto w-[3.2rem] h-[3.2rem]'
          />
        </div>
      </div>
      <p className='text-silver opacity-[0.5] pb-[3rem]'>
        Remember: X goes first
      </p>
    </div>
  );
};

export default PickPlayerMark;
