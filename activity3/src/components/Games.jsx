import { Link } from "react-router-dom"
const games = [
    {id: 1, name: 'Teamfight Tactics', description: 'autobattling game' },
    {id: 2, name: 'Valorant', description: 'number 1 fps game' },
    {id: 3, name: '2XKO', description: 'this is the number 1 tag team fighting game' },
    {id: 4, name: 'League of Legends', description: 'best moba' }
]
export default function Games () {
    return(
        <>
        <h1>Games List</h1> 
        <ul>
            {games.map((game)=>(
                
            <li><Link to={`/games/${game.id}`} state={game}>{game.name}</Link> - {game.description}</li>
            ))}
        </ul>
        </>
    )
}