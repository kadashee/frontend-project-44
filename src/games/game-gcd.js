import getRandomNum from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const remainder = num2;
    num2 = num1 % num2;
    num1 = remainder;
  }
  return num1;
};

const getGameRound = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getCommonDivisor(num1, num2));
  return [question, correctAnswer];
};

const runGcd = () => runGame(gameDescription, getGameRound);

export { getGameRound, gameDescription, runGcd };
