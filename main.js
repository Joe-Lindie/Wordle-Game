const letters = document.querySelectorAll("button")
const tiles = document.querySelectorAll(".tile")

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
  console.log(pressKey)
  return
}

//GET KEYBOARD LETTERS FUNCTION
function keyboardClick(letter) {
  if (letter.key.toUpperCase()) {
    console.log(letter.key.toUpperCase())
  }
}

//LOOP FOR TILES
tiles.forEach((tile) => {
  console.log((tile.innerHTML = "s"))
})
