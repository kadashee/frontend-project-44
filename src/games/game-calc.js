#!/usr/bin/env node
import getRandomNum from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
};

const getGameRound = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);

  const operatorsIndex = getRandomNum(0, operators.length - 1);
  const operator = operators[operatorsIndex];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

const runCalc = () => runGame(gameDescription, getGameRound);

export { getGameRound, gameDescription, runCalc };
