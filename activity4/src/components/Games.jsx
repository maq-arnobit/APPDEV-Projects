import { Link } from "react-router-dom"
const games = [
    {id: 1, name: 'League of Legends', description: 'Best MOBA of all time' },
    {id: 2, name: 'Dota 2', description: 'Second Best MOBA of all time' },
    {id: 3, name: 'Apex Legends', description: 'Battle Royale + Hero shooter' },
    {id: 4, name: 'Risk of Rain Returns', description: 'Roguelike Platformer' },
    {id: 5, name: 'Guilty Gear -Strive-', description: 'Fighting Game' }
]
export default function Games () {
    return(
        <>
        <div className="gamesdiv">
            <h1>Games List</h1> 
            <ul>
                {games.map((game)=>(
                    
                <li><Link to={`/games/${game.id}`} state={game}>{game.name}</Link></li>
                ))}
            </ul>
        </div>
        </>
    )
}