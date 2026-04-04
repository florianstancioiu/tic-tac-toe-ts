import StatCell from './UI/StatCell';

const GameStats = () => {
  return (
    <div className='flex justify-between gap-[2rem] mt-[2rem] text-center uppercase max-w-[32.8rem] mx-auto md:mx-[initial] md:max-w-full'>
      <StatCell bgColor='bg-light-blue' title='X (You)' numericTitle='14' />
      <StatCell bgColor='bg-silver' title='Ties' numericTitle='32' />
      <StatCell bgColor='bg-light-yellow' title='O (CPU)' numericTitle='11' />
    </div>
  );
};

export default GameStats;
