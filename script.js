    function randomNumber() {
        let num = Math.random()*6
        num = Math.floor(num) + 1 ;
        return num;
    }
    
    let randomNumbers = [];
    let dice1 = document.getElementById("dice1");
    let dice2 = document.getElementById("dice2");
    
    function updateImages() {
        let num1 = randomNumber();
        let newSrc1 = "./images/dice" + num1 + ".png";
        dice1.setAttribute("src", newSrc1);
        randomNumbers.push(num1);

        let num2 = randomNumber();
        let newSrc2 = "./images/dice" + num2 + ".png";
        dice2.setAttribute("src", newSrc2);
        randomNumbers.push(num2);

        gameResult();
    }   
    
    let player1Score = 0;
    let player2Score = 0;

    let player1ScoreDisplay = document.getElementById("player1Score");
    let player2ScoreDisplay = document.getElementById("player2Score");
  let winScore = 5;
    
    function gameResult(){
        if (randomNumbers[0] > randomNumbers[1]) {
            gameStatus.innerHTML = "Player 1 Wins The Round!";
            player1Score++;
        } else if (randomNumbers[0] < randomNumbers[1]) {
            gameStatus.innerHTML = "Player 2 Wins The Round!";
            player2Score++;
        } else {
            gameStatus.innerHTML = "Draw! 🏳️";
        }
        
        player1ScoreDisplay.textContent = player1Score;
        player2ScoreDisplay.textContent = player2Score;

        if (player1Score >= winScore) {
            gameStatus.innerHTML = "Player 1 Wins the Game!";
            startButton.disabled = true;
            startButton.style.visibility = "hidden" 
        } else if (player2Score >= winScore) {
            gameStatus.innerHTML = "Player 2 Wins the Game!";
            startButton.disabled = true; 
            startButton.style.visibility = "hidden"
        }

        randomNumbers = [];
    }

    let startButton = document.getElementById("startButton");
    let gameStatus = document.getElementById("gameStatus");

    startButton.addEventListener("click", function() {
        updateImages();
    });



