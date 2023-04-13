// DOM element
var startPage = document.querySelector("#startPage");
var inputName = document.querySelector("#inputName");
var plyFirst = document.querySelector("#plyFirst");
var plySecond = document.querySelector("#plySecond");

// Page first and Game
var startGame = document.querySelector("#startGame");
var gamePage = document.querySelector("#gamePage");
// ---
var playerFirst = document.querySelector("#playerFirst");
var playerSecond = document.querySelector("#playerSecond");
// Result
var firstResult = document.querySelector("#firstResult");
var secondResult = document.querySelector("#secondResult");
// Image
var firstImage = document.querySelector("#firstImage");
var secondImage = document.querySelector("#secondImage");
// Image Text
var imageTextFirst = document.querySelector("#imageTextFirst");
var imageTextSecond = document.querySelector("#imageTextSecond");

// Modal
var exampleModal = document.querySelector("#exampleModal");


//User & Comp points points 
var yourPoint = 0
var computerPoint = 0



// Add name, click Button and start Game
startGame.addEventListener("click", () => {

    if (!inputName.value.trim()) {
        alert("Please write your name")
        return
    }

    startPage.classList.remove("d-block")
    startPage.classList.add("d-none");
    gamePage.classList.remove("d-none");
    gamePage.classList.add("d-block");
    playerFirst.innerHTML = inputName.value

})
// // click ENTER start Game
// inputName.addEventListener("keyup", (e) => {
//      if (e.keyCode === 13) {
//          if (!inputName.value.trim()) {
//            alert("Please write your name");
//            return;
//          }

//          startPage.classList.remove("d-block");
//          startPage.classList.add("d-none");
//          gamePage.classList.remove("d-none");
//          gamePage.classList.add("d-block");
//          playerFirst.innerHTML = inputName.value;
//      }
// })


var compAttack = ["r", "s", "p"]

// computer Attack
function computer(arr) {

    var randomAttack = Math.floor(Math.random() * arr.length)
    
    return arr[randomAttack]
}

// User win function
function userWin() { 
        yourPoint++
        firstResult.innerHTML = `Score : ${yourPoint}`;
        plyFirst.innerHTML = "WIN";
        plySecond.innerHTML = "LOSE";
}

// Comp win function
function compWin() {
        computerPoint++;
        secondResult.innerHTML = `Score : ${computerPoint}`;
        plySecond.innerHTML = "WIN";
        plyFirst.innerHTML = "LOSE";
}

// function main
function game(e) {

    if (startPage.classList.contains("d-block")) {
        return
    }

    var userAttack = e.key;
    var randomCompAttack = computer(compAttack);

    firstImage.src = `./img/${userAttack}.png`
    secondImage.src = `./img/${randomCompAttack}.png`;
    
    if (
      compAttack.indexOf(userAttack) === -1) {
      alert("Please choose correct letter");
      return;
    } 
    // -------- User win

    if (userAttack === "r" && randomCompAttack === "s") {
      userWin();
      imageTextFirst.innerHTML = "Rock";
      imageTextSecond.innerHTML = "Scissors";
        
    } else if (userAttack === "s" && randomCompAttack === "p") {
      userWin();
      imageTextFirst.innerHTML = "Scissors";
      imageTextSecond.innerHTML = "Paper";
        
    } else if (userAttack === "p" && randomCompAttack === "r") {
      userWin();
      imageTextFirst.innerHTML = "Paper";
      imageTextSecond.innerHTML = "Rock";
        // ------ Comp win

    } else if (userAttack === "r" && randomCompAttack === "p") {
      compWin();
      imageTextFirst.innerHTML = "Rock";
      imageTextSecond.innerHTML = "Paper";
        
    } else if (userAttack === "p" && randomCompAttack === "s") {
      compWin();
      imageTextFirst.innerHTML = "Paper";
      imageTextSecond.innerHTML = "Scissorss";
        
    } else if (userAttack === "s" && randomCompAttack === "r") {
      compWin();
      imageTextFirst.innerHTML = "Scissors";
      imageTextSecond.innerHTML = "Rock";
        //-------- Draw
        
    } else if (userAttack === randomCompAttack) {
      plyFirst.innerHTML = "DRAW";
      plySecond.innerHTML = "DRAW";
    }
    
}

window.addEventListener("keyup", game)