import { getRandomNum } from "../utils.js";

const gameDescription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return "no";
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return "no";
    }
  }
  return "yes";
};

const getGameRound = () => {
  const number = getRandomNum(1, 100);
  const question = `${number}`;
  const correctAnswer = String(isPrime(number));
  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
