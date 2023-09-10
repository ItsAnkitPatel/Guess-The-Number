const guessedNum = document.querySelector("#guessField");
let chances = 10;
const msg = document.querySelector("#message");
const prevGuess = [];
const guesses = document.querySelector(".guesses");
const max = 100,
  min = 1;

document.querySelector("#subt").addEventListener("click", (e) => {
  e.preventDefault();
  let val = parseInt(guessedNum.value);

  if (isNaN(val)) {
    msg.innerHTML = "Enter a valid numeric number";
  } else if (val > 100 || val < 1) {
    msg.innerHTML = `${val} is not inside the range of 1 to 100`;
  } else {
    if (msg.value !== "") {
      msg.innerHTML = "";
    }

    if (chances >= 1) {
      const range = Math.floor(Math.random()*(max-min+1)) + min

      if (range === val) {
        removeElements("win");
      } else if (val < range) {
        document.querySelector(".lowOrHi").innerHTML = "Your number is low";
      } else if (val > range) {
        document.querySelector(".lowOrHi").innerHTML = "Your number is high";
      }

      guesses.innerHTML += `${(chances===10)?guessedNum.value: ', '+guessedNum.value} `;

      document.querySelector("#lastResult").innerText = `${--chances}`;

      if (chances === 0) {
        removeElements("lose");
      }
    }
  }
});

function removeElements(text) {
  // removing element
  document.querySelector("#subt").style.display = "none";
  document.querySelectorAll("div.resultParas p").forEach((prop) => {
    prop.style.display = "none";
  });

  //adding heading
  const h2 = document.createElement("h2");
  document.querySelector(".resultParas").appendChild(h2);

  //adding reload page button
  const btn = document.createElement("button");
  btn.innerHTML = "Play Again";
  btn.setAttribute("class", "playagain");
  document.querySelector("div.resultParas").appendChild(btn);

  //adding event listener to reload button
  document.querySelector("button").addEventListener("click", reloadPage);

  if (text === "win") {
    h2.innerHTML = "🎊YOU WON !🎊";
  } else if (text === "lose") {
    h2.innerHTML = "GAME OVER !🫥";
  }
}

function reloadPage() {
  location.reload();
}
