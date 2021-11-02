import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function EditMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer,setTrailer]=useState("")
  const setMovieName = (event) => setName(event.target.value);
  const setMoviePoster = (event) => setPoster(event.target.value);
  const setMovieRating = (event) => setRating(event.target.value);
  const setMovieSummary = (event) => setSummary(event.target.value);
  const setMovieTrailer = (event) => setTrailer(event.target.value);

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
    setTrailer("")
  };
  const addMovie = () => {
    console.log({ name, poster, rating, summary ,trailer});
    const newMovie = { name, poster, rating, summary,trailer };
    setMovies([...movies, newMovie]);
    resetMovieForm();
  };
  return (
    <div className="add-movie-form">
     
      <TextField
        value={name}
        label="Name"
        onChange={setMovieName}
        variant="outlined" />
      <TextField
        value={poster}
        label="Poster-url"
        onChange={setMoviePoster}
        variant="outlined" />
      <TextField
        value={rating}
        label="Rating"
        onChange={setMovieRating}
        variant="outlined" />
      <TextField
        value={summary}
        label="Summary"
        onChange={setMovieSummary}
        variant="outlined" />
        <TextField
        value={trailer}
        label="Trailer"
        onChange={setMovieTrailer}
        variant="outlined" />
      <Button onClick={addMovie} variant="contained">
        Add Movie
      </Button>
      {/* <button onClick={addMovie}>Add Movie</button> */}
    </div>
  );
}