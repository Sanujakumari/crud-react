import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useState,useEffect} from "react"

export function MovieDetails({ movies }) {
  // object destructuring {id}
  const { id } = useParams();
//   const movie = movies[id];
  const history = useHistory();
  const [movie, setMovie] = useState([]);

  useEffect(()=>{
    fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/"+ id)
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv))
  },[])
  return (
    <div>
      <iframe
        width="100%"
        height="360"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating} </p>
        </div>
        <p>{movie.summary}</p>
        <Button variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}>
          BACK</Button>

      </div>
    </div>
  );
}
