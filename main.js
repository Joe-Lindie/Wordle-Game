const letters = document.querySelectorAll("button")
const firstLetter = document.getElementById("grid1")

// EVENT LISTENERS FOR KEYBOARD KEYS
letters.forEach((button) => {
  button.addEventListener("click", function () {
    let character = button.innerHTML

    //SET CHARACTER TO THE INNERHTML OF DIV 1
    firstLetter.innerHTML = character
  })
})
