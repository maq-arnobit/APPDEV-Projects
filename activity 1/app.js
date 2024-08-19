//components for item #1
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
btn1.addEventListener("click", () => {
    //populate variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value
    let x = `Hello ${name}, I see that you are from ${address} and
    you are also pursuing your degree ${major} and you can be contacted
    using ${telephone}.`
    document.getElementById("output").innerHTML = x
})

btn2.addEventListener("click", () => {
    let x = document.getElementById("sales").value
    let profit = x * 0.23
    let y = `The profit that can be made is ${profit}`
    document.getElementById("profit").innerHTML = y
})

btn3.addEventListener("click", () => {
    const speed = 60
    let dist1 = speed * 5
    let dist2 = speed * 8
    let dist3 = speed * 12
    let x = `Distance traveled in 5 hours: ${dist1} miles`
    let y = `Distance traveled in 8 hours: ${dist2} miles`
    let z = `Distance traveled in 12 hours: ${dist3} miles`
    document.getElementById("distance1").innerHTML = x
    document.getElementById("distance2").innerHTML = y
    document.getElementById("distance3").innerHTML = z
})

btn4.addEventListener("click", () => {
    const miles = document.getElementById("miles").value
    const gas = document.getElementById("gas").value
    let mpg = miles/gas
    let x = `The miles per gallon (MPG) is ${mpg}`
    document.getElementById("mpg").innerHTML = x
})

btn5.addEventListener("click", () => {
    const tempC = document.getElementById("tempC").value
    let tempF = ((9/5) * tempC) + 32
    let x = `The temperature converted to Fahrenheit is ${tempF}`
    document.getElementById("tempF").innerHTML = x
})

btn6.addEventListener("click", () => {
    const cookies = document.getElementById("cookies").value
    let bag = 40
    let servings = 10
    const calorie_per_serving = 300
    let calorie_per_cookie = calorie_per_serving/(bag/servings)
    let calories = cookies * calorie_per_cookie
    let x = `The total number of calories consumed is ${calories}`
    document.getElementById("calories").innerHTML = x
})

btn7.addEventListener("click", () => {
    const males = document.getElementById("males").value
    const females = document.getElementById("females").value
    let total = parseInt(males) + parseInt(females)
    let percentM = (males/total) * 100
    let percentF = (females/total) * 100
    let x = `The percentage of males in the class is ${percentM}%`
    let y = `The percentage of females in the class is ${percentF}%`
    document.getElementById("percentM").innerHTML = x
    document.getElementById("percentF").innerHTML = y
})
