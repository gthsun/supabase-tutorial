import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [games, setGames] = useState(null);

  const handleDelete = (id) => {
    setGames((prevGames) => {
      return prevGames.filter((g) => g.id != id);
    });
  };

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from("games").select();

      if (error) {
        setFetchError("Cound not fetch the games.");
        setGames(null);
        console.log(error);
      }
      if (data) {
        setGames(data);
        setFetchError(null);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="page home">
      {fetchError && <>{fetchError}</>}
      {games && (
        <div className="games">
          <div className="game-grid">
            {games.map((game) => (
              <GameCard key={game.id} game={game} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
