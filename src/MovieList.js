import { useState } from "react";
import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";

export function MovieList({movies}) {
  
  return (
    <section>
       <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
            id={index}
          />
        ))}
      </div>
    </section>
  );
}
