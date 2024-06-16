function guessingGame() {
    const secretNum = Math.floor(Math.random() * 100);
    let count = 1;
    let won = false;

    return function guess(guess) {
        if (guess === secretNum) {
            if (!won) {
                won = true;
                return `You win! You found ${secretNum} in ${count} guesses.`;
            }
            return "The game is over, you already won!"
        }
        else if (guess < secretNum) {
            count++;
            return `${guess} is too low!`;
        }
        else if (guess > secretNum) {
            count++;
            return `${guess} is too high!`;
        }
    }
    
}

module.exports = { guessingGame };
