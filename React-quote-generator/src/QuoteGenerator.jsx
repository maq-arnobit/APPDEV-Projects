import React, { useState } from 'react'
const quotes = ["Better to trip with the feet than with the tongue.", "We suffer more often in imagination than in reality.", "Only the educated are free.", "Don't explain your philosophy. Embody it.", "Be tolerant with others and strict with yourself.", "Sometimes even to live is an act of courage."]
const sources = ["Zeno of Citium", "Seneca", "Epictetus", "Epictetus", "Marcus Aurelius", "Seneca"]
export default function QuoteGen () {
    const [index, setIndex] = useState(0)
    const [quote, setQuote] = useState("Better to trip with the feet than with the tongue.")
    const [source, setSource] = useState("Zeno of Citium")
    function getRandomNumber () {
        return Math.floor(Math.random() * quotes.length)
    }
    const nextQuote = () => {
        if (index == 5) {
            setIndex(i => i = 0)
        } else {
            setIndex(i => i + 1)
        }
        setQuote(q => q = quotes[index])
        setSource(s => s = sources[index])
    }
    const randomQuote = () => {
        let x = getRandomNumber()
        if (x == index) {
            setIndex(i => i + 1)
        } else {
            setIndex(i => i = x)
        }
        setQuote(q => q = quotes[index])
        setSource(s => s = sources[index])
    }
    return(
        <>
        <div className="container">
            <p className="quote"><i>{quote}</i></p>
            <p>- {source}</p>
            <button onClick={randomQuote}>Random Quote</button>
            <button onClick={nextQuote}>Next Quote</button>
            <br />
        </div>
        </>
    )
}