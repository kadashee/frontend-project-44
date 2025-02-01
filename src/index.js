import readlineSync from "readline-sync";
import { getUserName } from "./cli.js";

console.log('Welcome to the Brain games!');

const runGame = (gameDescription, getGameRound) => {
    const userName = getUserName();
    console.log(gameDescription);

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i++) {
        const [question, correctAnswer] = getGameRound();

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === correctAnswer) {
            console.log('Correct!')
        } else {
            console.log(`${userAnswer} is wrong answer! Correct answer was ${correctAnswer}`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}

export { runGame };

