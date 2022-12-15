let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let countHome = 0
let countGuest = 0

function a1() {
    countHome += 1
    homeEl.textContent = countHome
}

function a2() {
    countHome += 2
    homeEl.textContent = countHome
}

function a3() {
    countHome += 3
    homeEl.textContent = countHome
}

function b1() {
    countGuest += 1
    guestEl.textContent = countGuest
}

function b2() {
    countGuest += 2
    guestEl.textContent = countGuest
}

function b3() {
    countGuest += 3
    guestEl.textContent = countGuest
}

function reset() {
    countHome = 0
    countGuest = 0
    homeEl.textContent = countHome
    guestEl.textContent = countGuest
}