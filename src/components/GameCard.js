import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const GameCard = ({ game, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("games")
      .delete()
      .eq("id", game.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(game.id)
    }
  };

  return (
    <div className="game-card">
      <h3>{game.title}</h3>
      <p>{game.desc}</p>
      <div className="rating">{game.rating}</div>
      <div className="buttons">
        <Link to={"/" + game.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};

export default GameCard;
