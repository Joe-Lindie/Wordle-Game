const letters = document.querySelectorAll("button")
const tiles = document.querySelectorAll(".tile")

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

// EVENT LISTENERS FOR KEYBOARD KEYS
document.addEventListener("keypress", (event) => {
  let keyName = event.key.toUpperCase()

  // Adds selected value to all 30 tiles
  tiles.forEach((tile) => {
    console.log((tile.innerHTML = keyName))
  })
})

// EVENT LISTENERS FOR SCREEN KEYBOARD KEYS
letters.forEach((button) => {
  button.addEventListener("click", function () {
    let Selectedcharacter = button.innerHTML

    // Adds selected value to all 30 tiles
    tiles.forEach((tile) => {
      console.log((tile.innerHTML = Selectedcharacter))
    })
  })
})

/*
 const keyboardKeys = document.querySelector(".key")
    console.log(keyboardKeys.dataset.key)
*/
