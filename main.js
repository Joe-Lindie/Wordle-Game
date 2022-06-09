const letters = document.querySelectorAll("button")
let tiles = document.querySelectorAll(".tile")

let wordLength = 5
let count = 0
let guess = []

//ARRAY OF FIVE LETTER WORDS
const words = [
  "Adult",
  /*"Anger",
  "Apple",
  "Beach",
  "Birth",
  "Block",
  "Chain",
  "Chair",
  "Chest",
  "Dance",
  "Drama",
  "Dream",
  "Earth",
  "Enemy",
  "Fault",
  "Field",
  "Fight",*/
]

//TARGET WORDS FUNCTION
function targetWord() {
  let randomWord = ""
  randomWord = words[Math.floor(Math.random() * words.length)]
  return randomWord
}

//EVENT LISTENERS FOR ON-SCREEN KEYBOARD AND KEYBOARD KEYS
letters.forEach((letter) => {
  letter.addEventListener("click", screenKeyboardClick)
})

document.addEventListener("keypress", keyboardClick)

//GET SCREEN KEYBOARD LETTERS FUNCTION
function screenKeyboardClick(letter) {
  let pressKey = letter.target.dataset.key
  console.log(pressKey)

  //USER CAN ONLY ENTER FIVE LETTERS
  if (count === wordLength) {
    return
  }

  //ADDS LETTERS TO GRID
  for (let i = 0; i < tiles.length; i++) {
    let correctLocation = (tiles[i].style.backgroundColor = "green")
    let wrongLetter = (tiles[i].style.backgroundColor = "gray")
    let correctLetter = (tiles[i].style.backgroundColor = "yellow")

    if (tiles[i].innerHTML === "") {
      tiles[i].innerHTML = [pressKey]
      count++
      return
    }
  }

  // if (guess.length < wordLength) {
  //   guess.push(pressKey)
  //   return console.log(guess.join(""))
  // }
}

//GET KEYBOARD LETTERS FUNCTION
function keyboardClick(letter) {
  let pressKey = letter.key.toUpperCase()

  //USER CAN ONLY ENTER FIVE LETTERS
  if (count === wordLength) {
    return
  }

  //ADDS LETTERS TO GRID
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].innerHTML === "") {
      tiles[i].innerHTML = pressKey
      count++
      return
    }
  }
}

// //WON THE GAME FUNCTION
// function submitGuess() {
//   if (targetWord() === console.log(guess)) {
//     console.log("You Won!")
//   } else {
//     console.log("better luck next time")
//   }
// }
// submitGuess()
