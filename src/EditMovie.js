
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useState,useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";

export function EditMovie() {
    const { id } = useParams();
   const [movie, setMovie] = useState(null);

   useEffect(()=>{
     fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/"+ id)
     .then((data)=>data.json())
     .then((mv)=>setMovie(mv))
   },[]);
console.log(id,movie);
           // const copyMovies=[...movies];
    // copyMovies[id] =updateMovie;
    // setMovies(copyMovies);
    // history.push("/movies")

return movie ? <EditMovieForm  movie={movie}/>: "";

};
function EditMovieForm({movie}){
  const history = useHistory();

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer,setTrailer]=useState(movie.trailer)
  const setMovieName = (event) => setName(event.target.value);
  const setMoviePoster = (event) => setPoster(event.target.value);
  const setMovieRating = (event) => setRating(event.target.value);
  const setMovieSummary = (event) => setSummary(event.target.value);
  const setMovieTrailer = (event) => setTrailer(event.target.value);
  const editMovie = () => {
    console.log({ name, poster, rating, summary ,trailer});
    const updateMovie = { name, poster, rating, summary,trailer };
    fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/" + movie.id,{
              method:"PUT",
              body: JSON.stringify(updateMovie),
              headers: { 'Content-Type': 'application/json'}
            }).then(()=>{history.push("/movies") })
        .catch((err)=>console.log(err))
          };
  
  return <div className="add-movie-form">
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
    <Button onClick={editMovie} variant="contained">
      Edit Movie
    </Button>
  </div>
}
// export function EditMovie() {
//   const { id } = useParams();
//   //   const movie = movies[id];
//     const [movie, setMovie] = useState([]);
  
//     useEffect(()=>{
//       fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/"+ id)
//       .then((data)=>data.json())
//       .then((mv)=>setMovie(mv))
//     },[])
 
//   // const resetMovieForm = () => {
//   //   setName("");
//   //   setPoster("");
//   //   setRating("");
//   //   setSummary("");
//   //   setTrailer("")
//   // };
  
//   return movie ? <EditMovieForm movie={movie} /> :"";
   
//   }
// function EditMovieForm({movie}){
//   const history = useHistory();

//     const [name, setName] = useState(movie.name);
//     const [poster, setPoster] = useState(movie.poster);
//     const [rating, setRating] = useState(movie.rating);
//     const [summary, setSummary] = useState(movie.summary);
//     const [trailer,setTrailer]=useState(movie.trailer)
//     const setMovieName = (event) => setName(event.target.value);
//     const setMoviePoster = (event) => setPoster(event.target.value);
//     const setMovieRating = (event) => setRating(event.target.value);
//     const setMovieSummary = (event) => setSummary(event.target.value);
//     const setMovieTrailer = (event) => setTrailer(event.target.value);
//     const editMovie = () => {
//       console.log({ name, poster, rating, summary ,trailer});
//       const updateMovie = { name, poster, rating, summary,trailer };
    
//       fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/" +movie.id,{
//         method:"PUT",
//         body: JSON.stringify(updateMovie),
//         headers: { 'Content-Type': 'application/json'}
//       }).then(()=>{history.push("/movies") })
//   .catch((err)=>console.log(err))
//     };
    
//     return(
//     <div className="edit-movie-form">
     
//     <TextField
//       value={name}
//       label="Name"
//       onChange={setMovieName}
//       variant="outlined" />
//     <TextField
//       value={poster}
//       label="Poster-url"
//       onChange={setMoviePoster}
//       variant="outlined" />
//     <TextField
//       value={rating}
//       label="Rating"
//       onChange={setMovieRating}
//       variant="outlined" />
//     <TextField
//       value={summary}
//       label="Summary"
//       onChange={setMovieSummary}
//       variant="outlined" />
//       <TextField
//       value={trailer}
//       label="Trailer"
//       onChange={setMovieTrailer}
//       variant="outlined" />
//     <Button onClick={editMovie} variant="contained">
//       Edit Movie
//     </Button>
//     {/* <button onClick={addMovie}>Add Movie</button> */}
//   </div>
// );
  
// }




//import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import {useState,useEffect} from "react"
// import { useParams, useHistory } from "react-router-dom";

// export function EditMovie({movies,setMovies}) {
//     const { id } = useParams();
//    const movie = movies[id];
//    const history = useHistory();

//     const [name, setName] = useState(movie.name);
//     const [poster, setPoster] = useState(movie.poster);
//     const [rating, setRating] = useState(movie.rating);
//     const [summary, setSummary] = useState(movie.summary);
//     const [trailer,setTrailer]=useState(movie.trailer)
//     const setMovieName = (event) => setName(event.target.value);
//     const setMoviePoster = (event) => setPoster(event.target.value);
//     const setMovieRating = (event) => setRating(event.target.value);
//     const setMovieSummary = (event) => setSummary(event.target.value);
//     const setMovieTrailer = (event) => setTrailer(event.target.value);
//     const editMovie = () => {
//       console.log({ name, poster, rating, summary ,trailer});
//       const updateMovie = { name, poster, rating, summary,trailer };
//     const copyMovies=[...movies];
//     copyMovies[id] =updateMovie;
//     setMovies(copyMovies);
//     history.push("/movies")
// };
// return(
//   <div className="add-movie-form">
     
// <TextField
//       value={name}
//       label="Name"
//       onChange={setMovieName}
//       variant="outlined" />
//     <TextField
//       value={poster}
//       label="Poster-url"
//       onChange={setMoviePoster}
//       variant="outlined" />
//     <TextField
//       value={rating}
//       label="Rating"
//       onChange={setMovieRating}
//       variant="outlined" />
//     <TextField
//       value={summary}
//       label="Summary"
//       onChange={setMovieSummary}
//       variant="outlined" />
//       <TextField
//       value={trailer}
//       label="Trailer"
//       onChange={setMovieTrailer}
//       variant="outlined" />
//     <Button onClick={editMovie} variant="contained">
//       Edit Movie
//     </Button>
//     {/* <button onClick={addMovie}>Add Movie</button> */}
//   </div> 
// )
// }
// // export function EditMovie() {
// //   const { id } = useParams();
// //   //   const movie = movies[id];
// //     const [movie, setMovie] = useState([]);
  
// //     useEffect(()=>{
// //       fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/"+ id)
// //       .then((data)=>data.json())
// //       .then((mv)=>setMovie(mv))
// //     },[])
 
// //   // const resetMovieForm = () => {
// //   //   setName("");
// //   //   setPoster("");
// //   //   setRating("");
// //   //   setSummary("");
// //   //   setTrailer("")
// //   // };
  
// //   return movie ? <EditMovieForm movie={movie} /> :"";
   
// //   }
// // function EditMovieForm({movie}){
// //   const history = useHistory();

// //     const [name, setName] = useState(movie.name);
// //     const [poster, setPoster] = useState(movie.poster);
// //     const [rating, setRating] = useState(movie.rating);
// //     const [summary, setSummary] = useState(movie.summary);
// //     const [trailer,setTrailer]=useState(movie.trailer)
// //     const setMovieName = (event) => setName(event.target.value);
// //     const setMoviePoster = (event) => setPoster(event.target.value);
// //     const setMovieRating = (event) => setRating(event.target.value);
// //     const setMovieSummary = (event) => setSummary(event.target.value);
// //     const setMovieTrailer = (event) => setTrailer(event.target.value);
// //     const editMovie = () => {
// //       console.log({ name, poster, rating, summary ,trailer});
// //       const updateMovie = { name, poster, rating, summary,trailer };
    
// //       fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/" +movie.id,{
// //         method:"PUT",
// //         body: JSON.stringify(updateMovie),
// //         headers: { 'Content-Type': 'application/json'}
// //       }).then(()=>{history.push("/movies") })
// //   .catch((err)=>console.log(err))
// //     };
    
// //     return(
// //     <div className="edit-movie-form">
     
// //     <TextField
// //       value={name}
// //       label="Name"
// //       onChange={setMovieName}
// //       variant="outlined" />
// //     <TextField
// //       value={poster}
// //       label="Poster-url"
// //       onChange={setMoviePoster}
// //       variant="outlined" />
// //     <TextField
// //       value={rating}
// //       label="Rating"
// //       onChange={setMovieRating}
// //       variant="outlined" />
// //     <TextField
// //       value={summary}
// //       label="Summary"
// //       onChange={setMovieSummary}
// //       variant="outlined" />
// //       <TextField
// //       value={trailer}
// //       label="Trailer"
// //       onChange={setMovieTrailer}
// //       variant="outlined" />
// //     <Button onClick={editMovie} variant="contained">
// //       Edit Movie
// //     </Button>
// //     {/* <button onClick={addMovie}>Add Movie</button> */}
// //   </div>
// // );
  
// // }