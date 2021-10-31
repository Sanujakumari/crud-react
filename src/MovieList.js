import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Movie } from './Movie';

export function MovieList() {
  const INITIAL_MOVIES = [
    {
      name: "Coco",
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
      rating: "8.4",
      summary: "Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer."
    },
    {
      name: "Ratatouille",
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
      rating: "8",
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    },
    {
      name: "Luca",
      poster: "https://www.cinema.com/image_lib/16701_poster4.jpg",
      rating: "7.5",
      summary: "Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water's surface"
    },
    {
      name: "Disney Frozen",
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg",
      rating: "7.4",
      summary: "Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice."
    },
    {
      name: "Spider-Man",
      poster: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spiderman_verse_rating_0.jpg?itok=N_U_lGHQ",
      rating: "8.4",
      summary: "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse."
    }
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const setMovieName = (event) => setName(event.target.value);
  const setMoviePoster = (event) => setPoster(event.target.value);
  const setMovieRating = (event) => setRating(event.target.value);
  const setMovieSummary = (event) => setSummary(event.target.value);
  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
  };
  const addMovie = () => {
    console.log({ name, poster, rating, summary });
    const newMovie = { name, poster, rating, summary };
    setMovies([...movies, newMovie]);
    resetMovieForm();
  };
  return (
    <section>
      <div className="add-movie-form">
        {/* <input
                value={name}
               placeholder="Name"
               onChange={(event)=>setName(event.target.value)}
                  /> */}
        {/* <input
              value={name}
             placeholder="Name"
             onChange={setMovieName}
                />
            <input
                value={poster}
             placeholder="Poster-url"
             onChange={setMoviePoster}
                 />
            <input
             value={rating}
             placeholder="Rating"
             onChange={setMovieRating}
                 />
                 
            <input
             value={summary}
             placeholder="Summary"
             onChange={setMovieSummary}
                /> */}
        <TextField value={name} label="Name" onChange={setMovieName} variant="outlined" />
        <TextField value={poster} label="Poster-url" onChange={setMoviePoster} variant="outlined" />
        <TextField value={rating} label="Rating" onChange={setMovieRating} variant="outlined" />
        <TextField value={summary} label="Summary" onChange={setMovieSummary} variant="outlined" />

        <Button onClick={addMovie} variant="contained">Add Movie</Button>
        {/* <button onClick={addMovie}>Add Movie</button> */}
      </div>
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary} />
        ))}
      </div>
    </section>

  );
}
