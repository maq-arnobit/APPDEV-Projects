import React, { useState } from 'react'
import GroceryItem from "./GroceryItem"
export default function Grocery () {
    const [grapes, setGrapes] = useState(0)
    const addGrapes = () => {
        setGrapes(g => g + 1)
    }
    const [oranges, setOranges] = useState(0)
    const addOranges = () => {
        setOranges(o => o + 1)
    }
    const [kiwis, setKiwis] = useState(0)
    const addKiwis = () => {
        setKiwis(k => k + 1)
    }
    const [bananas, setBananas] = useState(0)
    const addBananas = () => {
        setBananas(b => b + 1)
    }
    const [cucumbers, setCucumbers] = useState(0)
    const addCucumbers= () => {
        setCucumbers(c => c + 1)
    }
    const [cartTotal, setCartTotal] = useState(0)
    const [pay, setPay] = useState(0)
    const [change, setChange] = useState(0)
    function calcTotal () {
        var p = document.getElementById('payment').value
        setPay(p)
        var total = (grapes*1) + (oranges*4) + (kiwis*10) + (bananas*3) + (cucumbers*5)
        setCartTotal(total)
        var chng = pay - cartTotal
        setChange(chng)
    }
    return(
        <>
        <div className="grocer">
            <GroceryItem name={"grapes"} price={"1"}/><button className="addtocart" onClick={addGrapes}>Add to cart</button>
            <GroceryItem name={"oranges"} price={"4"}/><button className="addtocart" onClick={addOranges}>Add to cart</button>
            <GroceryItem name={"kiwis"} price={"10"}/><button className="addtocart" onClick={addKiwis}>Add to cart</button>
            <GroceryItem name={"bananas"} price={"3"}/><button className="addtocart" onClick={addBananas}>Add to cart</button>
            <GroceryItem name={"cucumbers"} price={"5"}/><button className="addtocart" onClick={addCucumbers}>Add to cart</button>
            <br />
            <p className='p2'>Enter payment:$</p>
            <input type='number' className='payment' id='payment'></input>
            <center><button className="checkoutBtn" onClick={calcTotal}>Check out</button></center>
            
            <div className='receipt'>
                <h2>receipt:</h2>
                <ul>
                    <li>Grapes: {grapes} * $1</li>
                    <li>Oranges: {oranges} * $4</li>
                    <li>Kiwis: {kiwis} * $10</li>
                    <li>Bananas: {bananas} * $3</li>
                    <li>Cucumbers: {cucumbers} * $5</li>
                </ul>
                <p>Total: ${cartTotal}</p>
                <p>Amount paid: ${pay}</p>
                <p>Change: ${change}</p>
            </div>
        </div>
        </>
    )
}