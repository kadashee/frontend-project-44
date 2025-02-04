#!/usr/bin/env node
import getRandomNum from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getGameRound = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
