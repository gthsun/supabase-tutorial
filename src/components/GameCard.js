import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <h3>{game.title}</h3>
      <p>{game.desc}</p>
      <div className="rating">{game.rating}</div>
      <div className="buttons">
        <Link to={'/' + game.id}>
            <i className="material-icons">edit</i>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
