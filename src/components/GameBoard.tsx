import GameCell from './GameCell';

const cells = [
  [null, 'x', 'o'],
  ['x', 'o', 'x'],
  [null, 'o', 'x'],
];

const GameBoard = () => {
  return (
    <div className='grid gap-[2rem] max-w-[32.8rem] mx-auto md:mx-[initial]'>
      {cells.map((row, index) => (
        <div key={index} className='flex gap-[2rem] justify-between'>
          {row.map((cell, index) => {
            return <GameCell key={index} value={cell} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
