import readlineSync from 'readline-sync';

const runGame = (gameDescription, getGameRound) => {
  console.log('Welcome to the Brain games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getGameRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim();

    if (userAnswer !== correctAnswer) {
      console.log(
        `${userAnswer} is wrong answer! Correct answer was ${correctAnswer}`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
