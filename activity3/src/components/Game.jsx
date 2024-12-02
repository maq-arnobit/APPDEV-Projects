import { useLocation } from "react-router-dom"
export default function Game () {
    const location = useLocation()
    const game = location.state
    return(
        <>
            <div>
                <h1>{game.name}</h1>
                <p>{game.description}</p>
            </div>
        </>
    )
}