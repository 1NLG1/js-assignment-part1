// 2. Mathematical Shapes

// const s = 9;
// let d = 9 * Math.sqrt(2);
// console.log(`The diagonal of the square is ${d}`);

// const [s1, s2, s3] = [5, 6, 7];
// console.log(s1, s2, s3);
// const semiPerimeter = (s1 + s2 + s3) / 2;
// console.log(`The semi perimeter is ${semiPerimeter}`);
// const area = Math.sqrt(semiPerimeter * (semiPerimeter - s1) * (semiPerimeter - s2) * (semiPerimeter - s3));
// console.log(`The area is ${area}`);

// const r = 4;
// const pi = Math.PI;
// const circumference = 2 * pi * r;
// console.log(`Circumference is ${circumference}`)
// const circleArea = pi * r ** 2;
// console.log(`Circle Area is ${circleArea}`);

// // 3. Conditional Statements & Loops;

// let [a, b] = [7, 6];
// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// const c = 9;
// if (c % 2 === 0) {
//     console.log('The number is even')
// } else {
//     console.log('The number is odd')
// }


// 4. Main Javascript Project (rock-paper-scissors game)
const computerPlay = function () {
    const [min, max] = [0, 2];
    const arr = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * (max-min + 1)) + min;
    return arr[random].toUpperCase();
}

const userPlay = function () {
    let userChoice = prompt("Do you choose ROCK, PAPER or SCISSORS?").toUpperCase();
    while (userChoice !== 'ROCK' && userChoice !== 'PAPER' && userChoice !== 'SCISSORS') {
        userChoice = prompt("Pick only between rock, paper and scissors").toUpperCase();
    }
    return userChoice;
}


const playRound = function (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }

    if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            return 'You won! rock beats scissors'
        } else {
            return 'You lost! paper beats rock'
        }
    }

    if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return 'You won! paper beats rock'
        } else {
            return 'You lost! scissors beats paper'
        }
    }

    if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return 'You lost! rock beats scissors'
        } else {
            return 'You won! scissors beats paper'
        }
    }


}


const game = function () {
    playerScore = 0;
    computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = userPlay();
        let computerSelection = computerPlay();
        console.log(`Round ${i}:`,playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).includes('You won!')) {
            playerScore++; 
        } else if (playRound(playerSelection, computerSelection).includes('You lost!')) {
            computerScore++;
        }
    }
    if (playerScore === computerScore) {
        return 'The match is a tie!'
    } else if (playerScore < computerScore) {
        return 'The computer won the match'
    } else if (playerScore > computerScore) {
        return 'You won the match'
    }
}

console.log(game());

