
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useState,useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup";

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

return movie ? <EditMovieForm  movie={movie} id={id}/>: "";

};
const editMovieValidationSchema=yup.object({
  name:yup.string()
        .required("Enter Movie name "),
  poster:yup.string()
      
        .required("Enter proper Poster URL ")
        .min(10,"Enter valid  URL "),
  rating:yup.number()
         .min(0)
         .max(10)
        .required("Enter Rating as Number /10 "),
  trailer:yup.string()
          .matches(/(https|http):\/\/(?:www\.)?youtube.com\/embed\/[A-z0-9]+/i,"Enter valid  URL ")
        .required("Enter proper  URL "),
  summary:yup.string()
        .min(20)
        .required("Enter Movie Summary "),
})


  function EditMovieForm({movie,id}) {
    const history=useHistory();

    const editmovie = (updatedMovie) => {
        console.log("onSubmit",updatedMovie);
        // const updatedMovie = { name, poster, rating, summary,trailer };
        

        fetch("https://6156a15ce039a0001725aadf.mockapi.io/movies/"+id,{
            method:"PUT",
            body:JSON.stringify(updatedMovie),
            headers: { 'Content-Type': 'application/json'}
        }).then(()=>{
            history.push('/movie');
        }).catch((error)=>console.log(error)) ;



    };


    const{handleSubmit,handleBlur,handleChange,values,errors,touched}= useFormik({
        initialValues:{ 
            name: movie.name,
             poster:movie.poster,
             rating:movie.rating,
             summary:movie.summary,
             trailer:movie.trailer},
       validationSchema:editMovieValidationSchema,
         onSubmit:editmovie
    });



    

    return (
        <form 
        onSubmit={handleSubmit}
        className="add-movie-form">
            <TextField
                variant="outlined"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Name"
                error={errors.name && 
                    touched.name}
                helperText={errors.name && 
                    touched.name && errors.name} />

            <TextField
                value={values.poster}
                id="poster"
                name="poster"
                onChange={handleChange}
                onBlur={handleBlur}
                label="PosterURL"
                variant="outlined" 
                error={errors.poster && 
                    touched.poster}
                helperText={errors.poster && 
                    touched.poster && errors.poster}
                />          

            <TextField
                type="number"
                value={values.rating}
                id="rating"
                name="rating"
                onChange={handleChange}
                onBlur={handleBlur}
                label="Rating"
                variant="outlined"
                error={errors.rating && 
                    touched.rating}
                helperText={errors.rating && 
                    touched.rating && errors.rating}
                />
             <TextField

                value={values.trailer}
                id="trailer"
                name="trailer"
                onChange={handleChange}
                onBlur={handleBlur}
                label="Trailer"
                variant="outlined"
                error={errors.trailer && 
                    touched.trailer}
                helperText={errors.trailer && 
                    touched.trailer && errors.trailer}
                />

            <TextField
                value={values.summary}
                id="summary"
                name="summary"
                onChange={handleChange}
                onBlur={handleBlur}
                label="Summary"
                variant="outlined"
                error={errors.summary && 
                    touched.summary}
                helperText={errors.summary && 
                    touched.summary && errors.summary}
                />


            <div className="edit-buttons">
                <Button
                color="error"
                variant="contained"
                onClick={()=>{history.push('/movie')}}
                
                >Cancel</Button>

                <Button
                color="success"
                type="submit"
                variant="contained"
                // onClick={editmovie}
                // onClick={editmovie}
                
                >Save</Button>
                
            </div>

        </form>
    );

                }
                //function EditMovieForm({movie,id}){
                  //   const history = useHistory();
// const [movies,setMovies]=useState(movie)
  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [rating, setRating] = useState(movie.rating);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer,setTrailer]=useState(movie.trailer)
  // const setMovieName = (event) => setName(event.target.value);
  // const setMoviePoster = (event) => setPoster(event.target.value);
  // const setMovieRating = (event) => setRating(event.target.value);
  // const setMovieSummary = (event) => setSummary(event.target.value);
  // const setMovieTrailer = (event) => setTrailer(event.target.value);
  // const editMovie = () => {
  //   console.log({ name, poster, rating, summary ,trailer});
  //   const updateMovie = { name, poster, rating, summary,trailer };
  //   // setMovies([...movies, updateMovie])
  //
//    fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/" + movie.id,{
//               method:"PUT",
//               body: JSON.stringify(updateMovie),
//               headers: { 'Content-Type': 'application/json'}
//             }).then(()=>{history.push("/movies/edit/:id") })
//         .catch((err)=>console.log(err))
//           };
  
//   return( <div className="add-movie-form">
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
//   </div>)
// }
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