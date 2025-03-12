const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <h3>{game.title}</h3>
            <p>{game.desc}</p>
            <div className="rating">{game.rating}</div>
        </div> 
    )
}

export default GameCard