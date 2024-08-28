let count = 30
let started = false
const value = document.querySelector("#value")
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    if (started == false) {
        started = true
        btn.style.visibility = 'hidden'
        myInterval = setInterval(countDown,1000)
    }
})

function countDown() {
    if (count > 0) {
        count--
    }
    else {
        count = 30
        started = false
        btn.style.visibility = 'visible'
        clearInterval(myInterval)
    }
    console.log(1)
    value.textContent = count
}