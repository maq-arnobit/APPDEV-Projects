const quotes = ["Better to trip with the feet than with the tongue.", "We suffer more often in imagination than in reality.", "Only the educated are free.", "Don't explain your philosophy. Embody it.", "Be tolerant with others and strict with yourself.", "Sometimes even to live is an act of courage."]
const sources = ["Zeno of Citium", "Seneca", "Epictetus", "Epictetus", "Marcus Aurelius", "Seneca"]
const btn = document.getElementById("btn")
const quote = document.querySelector(".quote")
const source = document.querySelector(".source")

btn.addEventListener("click", () => {
    const x = getRandomNumber()
    quote.textContent = quotes[x]
    source.textContent = sources[x]
})

getRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length)
}