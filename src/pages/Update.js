import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const fetchGame = async () => {
      const { data, error } = await supabase
        .from("games")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setTitle(data.title);
        setDesc(data.desc);
        setRating(data.rating);
        console.log(data);
      }
    };

    fetchGame();
  }, [id]);

  return (
    <div className="page update">
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="desc">Description:</label>
        <textarea
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Update Game</button>
      
        {/*formError && <p className="error">{formError}</p>*/}
      </form>
    </div>
  );
};

export default Update;
