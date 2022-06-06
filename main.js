const letters = document.querySelectorAll("button")
const tiles = document.querySelectorAll(".tile")

let wordLength = 5
let count = 0

//ARRAY OF FIVE LETTER WORDS
const words = [
  "Adult",
  "Anger",
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
  "Fight",
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
