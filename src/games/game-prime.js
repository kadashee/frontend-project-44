import getRandomNum from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const squareRoot = Math.sqrt(number);
  for (let i = 2; i <= squareRoot; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameRound = () => {
  const number = getRandomNum(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => runGame(gameDescription, getGameRound);

export { getGameRound, gameDescription, runPrime };
