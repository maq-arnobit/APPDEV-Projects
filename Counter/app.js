let count = 0
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")) {
            count--
        }
        else if (styles.contains("increase")) {
            count++
        }
        else if (styles.contains("decreaseBy5")) {
            count -= 5
        }
        else if (styles.contains("increaseBy5")) {
            count += 5
        }
        else if (styles.contains("random")) {
            count = Math.floor(Math.random() * 1000) - 500
        }
        else {
            count = 0
        }
        if (count > 0) {
            value.style.color = "green"
        }
        else if (count < 0) {
            value.style.color = "red"
        }
        else if (count == 0) {
            value.style.color = "black"
        }
        value.textContent = count
        console.log(count)
    })
})