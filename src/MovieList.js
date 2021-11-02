import { useState } from "react";
import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router";

export function MovieList({movies,setMovies}) {
  const history=useHistory();
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
            trailer={mv.trailer}
            id={index}
           DeleteMovieButton={
            <IconButton
            className="movie-show-button"
              onClick={() =>{
                console.log(index,movies)
                const remainingMovies=movies.filter((mv,idx)=>idx!=index);
                setMovies(remainingMovies)
              } }
              color="error"
              aria-label="delete">
            < DeleteIcon />
            </IconButton>
           }
           EditMovieButton={
            <IconButton
            className="movie-show-button"
            onClick={()=>history.push("/movies/edit/" + index)}

              color="secondary"
              aria-label="edit">
            < EditIcon />
            </IconButton>
           }
          />
        ))}
      </div>
    </section>
  );
}

//another way....

// export function MovieList({movies,setMovies}) {
  
//   return (
//     <section>
//        <div className="movie-list">
//         {movies.map((mv, index) => (
//           <Movie
//             key={index}
//             name={mv.name}
//             poster={mv.poster}
//             rating={mv.rating}
//             summary={mv.summary}
//             id={index}
//             setMovies={setMovies}
//             movies={movies}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
