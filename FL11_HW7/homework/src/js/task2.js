let attempts = 3;
let prize = 100;
let total = 0;
let random = 9;
let num = 8;
let half = 2,
    three = 3,
    four = 4,
    eight = 8, 
    hundred = 100;
let casino = confirm('Do you want to play a game?');

if (casino) {
  while (casino) {
    let roulette = Math.floor(Math.random() * random);
    console.log(roulette);
    let player = +prompt(`
    Choose a roulette pocket number from 0 to ${num}
    Attempts left: ${attempts}
    Total prize: ${total}$
    Possible prize on current attempt: ${prize}$
    `);
    attempts--; 
    if (player === roulette) {
      prize = hundred;
      total += prize;
      prize *= half;
      casino = confirm(`Congratulation, you won! Your prize is: ${total}$. Do you want to continue?`);
      if (casino) {
        attempts = three;
        num += four;
        random += four;
        roulette = Math.floor(Math.random() * random);
        console.log(roulette);      
      } else {
        alert(`Thank you for your participation. Your prize is: ${total}$`);
        casino = false;
      }
    } else if (attempts === 0){
      alert(`Thank you for your participation. Your prize is: ${total}$`);
      casino = confirm('Do you want to play again?');
      if (casino) {
        prize = hundred;
        total = 0;
        attempts = three;
        num = eight;
        continue;
      } else {
        casino = false;
      }
    } else if (player !== roulette) {
      prize /= half;
    } else {
      continue;
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}