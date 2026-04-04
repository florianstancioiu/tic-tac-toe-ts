import { createPortal } from 'react-dom';

import Button from './Button';
import OMarkLightIcon from '../../images/o-mark-light.png';
import XMarkLightIcon from '../../images/x-mark-light.png';

const Modal = ({
  showTitle = true,
  title,
  bigTitle,
  bigTitleIcon = null,
  buttonSilverText,
  buttonYellowText,
}) => {
  let bigTitleImage = '';

  switch (bigTitleIcon) {
    case 'x':
      bigTitleImage = (
        <div>
          <img
            src={XMarkLightIcon}
            alt=''
            className='w-[3rem] h-[3rem] md:w-[6.4rem] md:h-[6.4rem]'
          />
        </div>
      );
      break;
    case 'o':
      bigTitleImage = (
        <div>
          <img
            src={OMarkLightIcon}
            alt=''
            className='w-[3rem] h-[3rem] md:w-[6.4rem] md:h-[6.4rem]'
          />
        </div>
      );
      break;
    default:
      bigTitleImage = '';
      break;
  }

  return createPortal(
    <div className='absolute left-0 top-0 w-full h-full'>
      <div className='absolute opacity-[0.5] bg-black h-full w-full'></div>
      <div className='absolute top-[50%] translate-y-[-50%] w-full bg-semi-dark-navy'>
        <div className='text-center max-w-[28rem] md:max-w-[48rem] mx-auto relative z-2 w-full pt-[4rem] pb-[3.2rem] md:pt-[4.5rem] md:pb-[4.5rem]'>
          {showTitle && (
            <p className='uppercase text-silver text-[1.4rem] text-bold mb-[1.6rem] md:text-[1.6rem] md:mb-[2.2rem]'>
              {title}
            </p>
          )}
          <div
            className={`${
              bigTitleIcon === 'o' ? 'text-light-yellow' : 'text-silver'
            } uppercase text-[2.4rem] md:text-[4rem] text-bold mb-[2.4rem] md:mb-[3rem] flex gap-[0.8rem] items-center justify-center`}
          >
            {bigTitleImage}
            {bigTitle}
          </div>
          <div className='flex justify-evenly gap-[1.6rem] md:justify-center'>
            <Button color='silver' title={buttonSilverText} />
            <Button title={buttonYellowText} />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
