import { useLocation } from "react-router-dom"
import Reviews from "./Reviews"
export default function Game () {
    const location = useLocation()
    const game = location.state
    return(
        <>
            <div className="gamediv">
                <h1>{game.name}</h1>
                <p>{game.description}</p>
            </div>

            <Reviews id={game.id}/>
        </>
    )
}