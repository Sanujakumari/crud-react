import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup'


const movieValidationSchema=yup.object({
  name:yup.string()
  .min(3,"enter a proper movie name")
  .required(),
 poster:yup.string()
  .required("A cool poster is in need"),
  rating:yup.number()
  .required("Enter rating").min(0).max(10),
  summary:yup.string()
  .min(25,"enter minimum 25 characters")
  .required(),
  trailer:yup.string()
  .required("A cool trailer is in need"),

})
export function AddMovie() {
  
  const history=useHistory();
  const addMovie = (newMovie) => {
    console.log("onSubmit", newMovie);

    fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/" ,{
      method:"POST",
      body: JSON.stringify(newMovie),
      headers: { 'Content-Type': 'application/json'}
    }).then(()=>{history.push('/movies'); })
.catch((err)=>console.log(err))
  }
  const {handleSubmit,values,touched,errors,handleChange,handleBlur}=
  useFormik({
        initialValues:{ name: "", poster: "", rating: "", summary: "" ,trailer: "" },
        validationSchema:movieValidationSchema,
        onSubmit:addMovie,
});
  
  
  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
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
      <TextField
        value={values.name}
        id="name"
        name="name"
        label="Name"
        onChange={handleChange}
              onBlur={handleBlur}
        variant="outlined"
        error= {errors.name && touched.name}
        helperText= {errors.name && touched.name && errors.name}
        />
       <TextField
        value={values.poster}
        id="poster"
        name="poster"
        label="Poster-url"
        onChange={handleChange}
        onBlur={handleBlur}      
          variant="outlined"
          error= {errors.poster && touched.poster}
          helperText= {errors.poster && touched.poster && errors.poster} />
      <TextField
        value={values.rating}
        id="rating"
        name="rating"
        label="Rating"
        onChange={handleChange}
        onBlur={handleBlur}      
          variant="outlined" 
          error= {errors.rating && touched.rating}
          helperText= {errors.rating && touched.rating && errors.rating}/>
      <TextField
        value={values.summary}
        id="summary"
        name="summary"
        label="Summary"
        onChange={handleChange}
        onBlur={handleBlur}       
         variant="outlined" 
         error= {errors.summary && touched.summary}
         helperText= {errors.summary && touched.summary && errors.summary}/>
        <TextField
        value={values.trailer}
        id="trailer"
        name="trailer"
        label="Trailer"
        onChange={handleChange}
        onBlur={handleBlur}       
         variant="outlined"
         error= {errors.trailer && touched.trailer}
         helperText= {errors.trailer && touched.trailer && errors.trailer} />
      <Button type="submit" onClick={addMovie} variant="contained">
        Add Movie
      </Button>
      {/* <button onClick={addMovie}>Add Movie</button> */}
    </form>
  );
}









// export function AddMovie() {
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   const [trailer,setTrailer]=useState("")
//   const history=useHistory();

//   const setMovieName = (event) => setName(event.target.value);
//   const setMoviePoster = (event) => setPoster(event.target.value);
//   const setMovieRating = (event) => setRating(event.target.value);
//   const setMovieSummary = (event) => setSummary(event.target.value);
//   const setMovieTrailer = (event) => setTrailer(event.target.value);

//   const resetMovieForm = () => {
//     setName("");
//     setPoster("");
//     setRating("");
//     setSummary("");
//     setTrailer("")
//   };
//   const addMovie = () => {
//     console.log({ name, poster, rating, summary ,trailer});
//     const newMovie = { name, poster, rating, summary,trailer };
//     // setMovies([...movies, newMovie]);
   
//     fetch("https://6188b885d0821900178d74e6.mockapi.io/movies/" ,{
//       method:"POST",
//       body: JSON.stringify(newMovie),
//       headers: { 'Content-Type': 'application/json'}
//     }).then(()=>{history.push('/movies'); resetMovieForm();})
// .catch((err)=>console.log(err))
//   };
//   return (
//     <div className="add-movie-form">
//       {/* <input
//                  value={name}
//                 placeholder="Name"
//                 onChange={(event)=>setName(event.target.value)}
//                    /> */}
//       {/* <input
//                value={name}
//               placeholder="Name"
//               onChange={setMovieName}
//                  />
//              <input
//                  value={poster}
//               placeholder="Poster-url"
//               onChange={setMoviePoster}
//                   />
//              <input
//               value={rating}
//               placeholder="Rating"
//               onChange={setMovieRating}
//                   />
                  
//              <input
//               value={summary}
//               placeholder="Summary"
//               onChange={setMovieSummary}
//                  /> */}
//       <TextField
//         value={name}
//         label="Name"
//         onChange={setMovieName}
//         variant="outlined" />
//       <TextField
//         value={poster}
//         label="Poster-url"
//         onChange={setMoviePoster}
//         variant="outlined" />
//       <TextField
//         value={rating}
//         label="Rating"
//         onChange={setMovieRating}
//         variant="outlined" />
//       <TextField
//         value={summary}
//         label="Summary"
//         onChange={setMovieSummary}
//         variant="outlined" />
//         <TextField
//         value={trailer}
//         label="Trailer"
//         onChange={setMovieTrailer}
//         variant="outlined" />
//       <Button onClick={addMovie} variant="contained">
//         Add Movie
//       </Button>
//       {/* <button onClick={addMovie}>Add Movie</button> */}
//     </div>
//   );
// }
