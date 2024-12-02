import PropTypes from 'prop-types'
const allreviews = [
    [
        {id: 1, reviewtext: 'Its alright', reviewer: 'Faker' },
        {id: 2, reviewtext: 'Relaxing, stress-relieving game and very friendly community (ARAM)', reviewer: 'Doublelift' },
        {id: 3, reviewtext: '10/10 easy', reviewer: 'progamer420' },
        {id: 4, reviewtext: 'Ksante too op i quit', reviewer: 'Hans' },
        {id: 5, reviewtext: 'Nerf akali', reviewer: 'Rold' }
    ],
    [
        {id: 1, reviewtext: 'GG Good', reviewer: 'n0tail' },
        {id: 2, reviewtext: 'Do not play this game', reviewer: 'Arteezy' },
        {id: 3, reviewtext: '10/10 easy', reviewer: 'progamer420' },
        {id: 4, reviewtext: 'League is better', reviewer: 'Maq' },
        {id: 5, reviewtext: 'Best game ever', reviewer: 'Hans' }
    ],
    [
        {id: 1, reviewtext: 'GG Good', reviewer: 'Faker' },
        {id: 2, reviewtext: 'Apex Legends spices up the battle royale formula with hero-based shooter pizazz and its revolutionary pinging system', reviewer: 'USgamer' },
        {id: 3, reviewtext: '10/10 easy', reviewer: 'progamer420' },
        {id: 4, reviewtext: 'PUBG but improved', reviewer: 'Hans' },
        {id: 5, reviewtext: 'Worst game ive ever played pls buff the mozambique', reviewer: 'John' }
    ],
    [
        {id: 1, reviewtext: 'GG Good', reviewer: 'Faker' },
        {id: 2, reviewtext: 'This is one of those games that you can play endlessly (as long as your computer can handle it)', reviewer: 'minesweeper1973' },
        {id: 3, reviewtext: '10/10 easy', reviewer: 'progamer420' },
        {id: 4, reviewtext: 'Massive improvement from the original title with optimizations and more gamemodes', reviewer: 'Maq' },
        {id: 5, reviewtext: 'Fun and challenging', reviewer: 'Providence' }
    ],
    [
        {id: 1, reviewtext: 'GG Good', reviewer: 'Faker' },
        {id: 2, reviewtext: 'Amazing visuals, music and gameplay', reviewer: 'Dizzy' },
        {id: 3, reviewtext: '10/10 easy', reviewer: 'progamer420' },
        {id: 4, reviewtext: 'Guilty Gear Strive is a milestone 2D fighting game that raises the bar for anime-like fighters', reviewer: 'IGN' },
        {id: 5, reviewtext: 'Fighting game of the year', reviewer: 'Ky' }
    ],
]

export default function Reviews (props) {
    const review_index = props.id - 1
    const review = allreviews[review_index]
    return(
        <>
        <div className="reviews">
            <h1>Reviews</h1>
            {review.map((text)=>(
                <li>
                    <p><i>"{text.reviewtext}"</i>- {text.reviewer}</p>
                </li>
            ))}
        </div>
        </>
    )
}

Reviews.propTypes = {
    id: PropTypes.number
}