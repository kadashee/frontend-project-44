#!/usr/bin/env node
import { getRandomNum } from "../utils.js";

const gameDescription = "What is the result of the expression?";

let operators = ["+", "-", "*"];

const calculate = (num1, num2, operator) => {
  if (operator === "+") {
    return String(num1 + num2);
  }
  if (operator === "-") {
    return String(num1 - num2);
  }
  if (operator === "*") {
    return String(num1 * num2);
  }
};

const getGameRound = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);

  const operatorsIndex = getRandomNum(0, operators.length - 1);
  const operator = operators[operatorsIndex];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);

  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
