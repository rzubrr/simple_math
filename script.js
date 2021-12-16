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


div = document.createElement("div")
div.classList.add("main")
h1 = document.createElement("h1")
h1.innerText = "simple math problem generator"
button = document.createElement("button")
button.innerText = "START"
input = document.createElement("input")
input.type = "number"

cont.appendChild(div)
div.appendChild(h1)
div.appendChild(button)

button.addEventListener('click', () => {
    if (count < 5) {
        div.removeChild(h1)
        div.removeChild(button)
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
        button.innerText = 'NEXT'

        console.log("Wynik = " + random[count])
        console.log(random)
        
        guesses[count] = input.value;
        console.log("Zgadnięcie: " + guesses[count])
        
        if (guesses[count] == random[count-1]) {
            console.log("ZGADŁ")
            guessed++
        }

        count++

        div.appendChild(h1)
        div.appendChild(input)
        div.appendChild(button)
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

        div.removeChild(button)
        div.removeChild(input)

        h1.innerText=`You've guessed ${guessed} out of 5`
        
    }
})