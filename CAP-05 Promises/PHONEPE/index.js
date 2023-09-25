let form = document.querySelector('#form')
let pendingScreen = document.querySelector('#pendingScreen')
let successfulScreen = document.querySelector('#successfulScreen')
let failureScreen = document.querySelector('#failedScreen')
let home = document.querySelector('#home')


let inputAmount = document.querySelector('#inputAmount')
let submitBtn = document.querySelector('#submit')

let ranNum = Math.floor(Math.random() * 10); // generating a random number
console.log(ranNum);


function showSuccess() {
    pendingScreen.style.display = 'none'
    successfulScreen.style.display = 'block'
}

function showFailure() {
    pendingScreen.style.display = 'none'
    failureScreen.style.display = 'block'
}

function submit() {
    console.log(inputAmount.value);
    // toggling to the pending screen
    pendingScreen.style.display = 'block'
    home.style.display = 'none'

    let myPromise = new Promise((res, rej) => {
        setTimeout(() => {
            ranNum > 3 ? res(showSuccess) : rej(showFailure); // resolving/rejecting a/c wherether the randNum is even/odd
        }, 2000);
    })

    myPromise
        .then((showSuccess) => {
            showSuccess()
        })
        .catch((showFailure) => {
            showFailure()
        })
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    submit()
})

