function Turn() {
  const getRandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var randomNumber1 = getRandomnumber(1, 6);
  var randomNumber2 = getRandomnumber(1, 6);

  const player1 = document.querySelector(".img1");
  const player2 = document.querySelector(".img2");

  switch (randomNumber2) {
    case 1:
      player2.src = "images/dice1.png";
      break;

    case 2:
      player2.src = "images/dice2.png";
      break;

    case 3:
      player2.src = "images/dice3.png";
      break;

    case 4:
      player2.src = "images/dice4.png";
      break;

    case 5:
      player2.src = "images/dice5.png";
      break;

    case 6:
      player2.src = "images/dice6.png";
      break;

    default:
      Turn();
  }
  switch (randomNumber1) {
    case 1:
      player1.src = "images/dice1.png";
      break;

    case 2:
      player1.src = "images/dice2.png";
      break;

    case 3:
      player1.src = "images/dice3.png";
      break;

    case 4:
      player1.src = "images/dice4.png";
      break;

    case 5:
      player1.src = "images/dice5.png";
      break;

    case 6:
      player1.src = "images/dice6.png";
      break;

    default:
      Turn();
  }

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1, Wins! 🎉";
  } else {
    document.querySelector("h1").innerHTML = "🎉 Player2, Wins!";
  }
  if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw! 🤝🏼";
  }
}
