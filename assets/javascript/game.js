var compLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  var userInput = [];
  var userGuesses = 9; 
  var userLosses = 0;
  var userWins = 0;
  var lettersPressed = "";
   function reset() { 
   userGuesses = 9; 
   userLosses = 0;
   userWins = 0;
   lettersPressed = 0;
  };
  // var chosenLetters = compLetters[Math.floor(Math.random() * compLetters.length)];
  //user presses key

  document.onkeyup = function(event) {
    lettersPressed = lettersPressed + event.key;

    var chosenLetters = compLetters[Math.floor(Math.random() * compLetters.length)];
    // console.log(chosenLetters);
    document.getElementById("your-guesses").textContent = "Your Guesses So Far :" + lettersPressed;
    //make a condition if userInput will 9 times
    if (event.key === chosenLetters) {
      document.getElementById("wins").textContent = "Wins :" + userWins;
      userWins++;
      alert("you win");
      reset();
    } else {
      // userGuesses = 9;
      alert("your lost");
      document.getElementById("guesses-left").textContent = "Guesses Left :" + userGuesses ;
      userGuesses--;
      // else { (userLosses = 9 && userGuesses === 0) 
      document.getElementById("losses").textContent = "Losses :" + userLosses;
      userLosses++;
      // console.log(userGuesses);
    } if (userLosses == 9 && userGuesses == 0) 
      reset();
  }