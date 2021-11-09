import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router";
import {useState,useEffect} from "react"


export function MovieList() {
  const history=useHistory();
  const [movies, setMovies] = useState([]);

    const getMovies=()=>{
      fetch("https://6188b885d0821900178d74e6.mockapi.io/movies",{
        method:"GET",
      })
      .then((data)=>data.json())
      .then((mvs)=>setMovies(mvs))
    }
    const deleteMovie=(id)=>{
      fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/" + id,{
                  method:"DELETE",
                }).then(()=>getMovies());
    }
    useEffect(getMovies,[]);

   
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
            id={mv.id}
           DeleteMovieButton={
            <IconButton

            className="movie-show-button"
              onClick={() =>{deleteMovie(mv.id)}
                // console.log(index,movies)
                // const remainingMovies=movies.filter((mv,idx)=>idx!=index);
                // setMovies(remainingMovies)
                
              }
              color="error"
              aria-label="delete">
            < DeleteIcon />
            </IconButton>
           }
           EditMovieButton={
            <IconButton
            className="movie-show-button"
            onClick={()=>history.push("/movies/edit/" +mv.id)}

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
