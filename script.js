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

function randomise() {
    x = losuj()
    y = losuj()
    op = Math.floor(Math.random() * 3)
    console.log("Problem nr: " + op)
    if (op == 0) {
        random[count] = x + y
        h1.innerText = `${x} + ${y} = `
    }
    else if (op == 1) {
        random[count] = x - y
        h1.innerText = `${x} - ${y} = `
    }
    else {
        random[count] = x * y
        h1.innerText = `${x} * ${y} = `
    }
    console.log("Result = " + random[count])
    console.log(random)
    input.value =''
}

function guess() {
    guesses[count] = input.value;
    console.log(guesses)
    console.log("Guessing: " + guesses[count])
    if (guesses[count] == random[count]) {
        console.log("GUESSED")
        guessed++
    }
    count++
}

function compile() {
    if (count < 4) {
        guess()
        randomise()
    }
    else {
        guess()
        console.log(guesses)
        console.log(random)
        div_prob.removeChild(input)
        div.removeChild(button_submit)
        h1.innerText=`You've guessed ${guessed} out of 5`
    }
}


div = document.createElement("div")
div.classList.add("main")
div_prob = document.createElement("div")
div_prob.classList.add("prob")
h1 = document.createElement("h1")
h1.innerText = "simple math problem generator"
button = document.createElement("button")
button.innerText = "START"
input = document.createElement("input")
input.type = "number"
button_submit = document.createElement("button")
button_submit.innerText = "NEXT"

cont.appendChild(div_prob)
cont.appendChild(div)
div.appendChild(h1)
div.appendChild(button)

button.addEventListener('click', () => {
        randomise()
        div.removeChild(button)
        div.removeChild(h1)
        div_prob.appendChild(h1)
        div_prob.appendChild(input)
        div.appendChild(button_submit)
})

button_submit.addEventListener('click', () => {
    compile()
})

input.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
        compile()
    }
})