import {getRandomNum} from "../utils.js";


const createProgression = (start, difference, length) => {
    const progression = []
    for (let i = 0; i < length; i+= 1) {
        progression.push(start + i * difference);
    }
    return progression;
}

const hideElement = (progression) => {
    const hiddenIndex = getRandomNum(0, progression.length - 1);
    const hiddenElement = progression[hiddenIndex];
    progression[hiddenIndex] = '..'
    return String(hiddenElement);
}

const gameDescription = 'What number is missing in the progression?'

const getGameRound = () => {
    const start = getRandomNum(1, 10);
    const difference = getRandomNum(1, 5);
    const length = getRandomNum(5, 10);

    const progression = createProgression(start, difference, length);
    const correctAnswer = hideElement(progression);
    const question = progression.join('  ');
    return [question, correctAnswer];
}

export { getGameRound, gameDescription };