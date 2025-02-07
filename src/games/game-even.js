#!/usr/bin/env node
import getRandomNum from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameRound = () => {
  const question = String(getRandomNum(1, 100));
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => runGame(gameDescription, getGameRound);

export { getGameRound, gameDescription, runEven };
