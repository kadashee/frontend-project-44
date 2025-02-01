import { getRandomNum } from "../utils.js";

const getCommonDivisor = (num1, num2) => {
    while (num2 !== 0) {
        const remainder = num2;
        num2 = num1 % num2;
        num1 = remainder;
    }
    return num1;
}

const gameDescription = 'Find the greatest common divisor of given numbers.'

const getGameRound = () => {
    const num1 = getRandomNum(1, 100);
    const num2 = getRandomNum(1, 100);
    const question = `Question: ${num1} ${num2}`;
    const correctAnswer = String(getCommonDivisor(num1, num2));
    return [question, correctAnswer];
}

export { getGameRound, gameDescription };

