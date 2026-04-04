import Button from './UI/Button';
import LogoImage from '../images/logo.png';
import PickPlayerMark from './PickPlayerMark';

const NewGame = () => {
  return (
    <div className='pt-[12rem] mb-[12rem] md:py-[27.6rem] md:max-w-[46rem] md:mx-auto 2xl:py-[21.5rem]'>
      <img
        src={LogoImage}
        alt='Tic Tac Toe Logo'
        className='block mx-auto mb-[32px]'
      />
      <PickPlayerMark />
      <Button title='New Game (vs CPU)' fullWidth />
      <Button title='New Game (vs Player)' color='blue' fullWidth />
    </div>
  );
};

export default NewGame;
