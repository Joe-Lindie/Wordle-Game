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

//EVENT LISTENERS FOR ON-SCREEN KEYBOARD/KEYBOARD KEYS
letters.forEach((letter) => {
  letter.addEventListener("click", keyboardClick)
})

//GET DATA KEY FUNCTION
function keyboardClick(letter) {
  if (letter.target.matches("[data-key]")) {
    pressKey(letter.target.dataset.key)
    return
  }
}

//NEW LETTER FUNCTION
function pressKey(letter) {
  console.log(letter)
  // set equal to selected square to place guess
}

/*
//EVENT LISTENERS FOR ON-SCREEN KEYBOARD KEYS
letters.forEach((button) => {
  button.addEventListener("click", function () {
    let selectedCharacter = button.innerHTML

    //ADDS SELECTED VALUE TO ALL 30 TILES
    tiles.forEach((tile) => {
      tile.innerHTML = selectedCharacter
    })
  })
})
*/

// EVENT LISTENERS FOR KEYBOARD KEYS
document.addEventListener("keypress", (event) => {
  let keyName = event.key.toUpperCase()

  //ADDS SELECTED VALUE TO ALL 30 TILES
  tiles.forEach((tile) => {
    tile.innerHTML = keyName
  })
})
