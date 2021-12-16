const cont = document.querySelector(".container")
let random = []
let guesses = []
let op
let x = 0
let y = 0
let count = 0
let guessed = 0

function losuj() {
    return Math.floor(Math.random() * (20 - (-10)) + (-10))
}

function guess () {
    x = losuj()
    y = losuj()
    console.log(x)
    console.log(y)
    op = Math.floor(Math.random() * 3)
    console.log("Działanie: " + op)
    if (op == 0) {
        random[count] = x + y
        h1.innerText = `${x} + ${y}`
    }
    else if (op == 1) {
        random[count] = x - y
        h1.innerText = `${x} - ${y}`
    }
    else {
        random[count] = x * y
        h1.innerText = `${x} * ${y}`
    }
    console.log("Wynik = " + random[count])
    console.log(random)
    guesses[count] = input.value;
    console.log("Zgadnięcie: " + guesses[count])
    if (guesses[count] == random[count]) {
        console.log("ZGADŁ")
        guessed++
    }
    count++
}



div = document.createElement("div")
div.classList.add("main")
h1 = document.createElement("h1")
h1.innerText = "simple math problem generator"
button = document.createElement("button")
button.innerText = "START"
input = document.createElement("input")
input.type = "number"
button_submit = document.createElement("button")
button_submit.innerText = "NEXT"

cont.appendChild(div)
div.appendChild(h1)
div.appendChild(button)

button.addEventListener('click', () => {
        div.removeChild(button)
        div.appendChild(input)
        div.appendChild(button_submit)
        guess()
})

button_submit.addEventListener('click', () => {
    if (count < 5) {
        guess()

        div.appendChild(h1)
        div.appendChild(input)
        div.appendChild(button_submit)
        console.log(guesses)
        console.log(random)
    }
    else {
        guesses[count] = input.value;
        console.log("Zgadnięcie: " + guesses[count])
        if (guesses[count] == random[count-1]) {
            console.log("ZGADŁ")
            guessed++
        }
        guesses.splice(0, 1)
        console.log(guesses)
        console.log(random)
        div.removeChild(input)
        h1.innerText=`You've guessed ${guessed} out of 5`
    }
})