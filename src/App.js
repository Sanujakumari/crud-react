import logo from './logo.svg';
import './App.css';
import { margin } from '@mui/system';
import { MovieList } from './MovieList';
import {ColorList} from './ColorList'
import React from "react";
import ReactDOM from "react-dom"
import {Switch, Route, Link,Redirect}  from "react-router-dom"; 
import {AddMovie} from "./AddMovie";
import {useState} from "react"
import {useParams,useHistory} from "react-router-dom"
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {EditMovie} from "./EditMovie"
function App(){
  const users=[
    {
    name:"donaldo",
     pic:"https://media.newyorker.com/photos/5cf81a2b78887298005c996a/4:3/w_2560,h_1920,c_limit/KidLit-DonaldDuck.jpg"  },
    {
    name:"mickey",
    pic:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png"
  },
  ];
  const INITIAL_MOVIES = [
    {
      name: "Coco",
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
      rating: "8.4",
      summary:
        "Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer.",
    trailer:"https://www.youtube.com/embed/Rvr68u6k5sI"
      },
    {
      name: "Ratatouille",
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
      rating: "8",
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
        trailer:"https://www.youtube.com/embed/PeFGdSrFTUw"
      },
    {
      name: "Luca",
      poster: "https://www.cinema.com/image_lib/16701_poster4.jpg",
      rating: "7.5",
      summary:
        "Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water's surface",
        trailer:"https://www.youtube.com/embed/0hgHY9k-44U"
      },
    {
      name: "Disney Frozen",
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg",
      rating: "7.4",
      summary:
        "Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.",
        trailer:"https://www.youtube.com/embed/TbQm5doF_Uc"
      },
    {
      name: "Spider-Man",
      poster:
        "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spiderman_verse_rating_0.jpg?itok=N_U_lGHQ",
      rating: "8.4",
      summary:
        "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.",
        trailer:"https://www.youtube.com/embed/WgU7P6o-GkM" 
      },
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  
  return(
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/movies/add">Add Movie</Link></li>
          <li><Link to="/color-game">Color Game</Link></li>
          <li><Link to="/tictactoe">Tic Tac Toe Game</Link></li>

        </ul>
      </nav>
      <Switch>
      <Route exact path="/">
        < Welcome />
        {/* <MovieDetails/> */}
        </Route>
        <Route path="/tictactoe">
       <  TicTacToe />

        </Route>
        <Route path="/films">
          <  Redirect to ="/movies" />
        </Route>
        <Route path="/movies/add">
        <AddMovie movies={movies} setMovies={setMovies}/>   

        </Route>
        <Route path="/movies/:id">
        <MovieDetails movies={movies} />
        </Route>
        <Route path="/movies/edit/:id">
        <EditMovie movies={movies} setMovies={setMovies}/>   

        </Route>
        <Route path="/movies">
        < MovieList movies={movies} setMovies={setMovies}/>

        </Route>
        
        <Route path="/color-game">
        <ColorList />
        </Route>
        <Route path="**">
        <NotFound />
        </Route>
        </Switch>
      {/* {users.map((user)=>(
        <Msg name={user.name} pic={user.pic} />
      ))} */}
     {/* <ColorList /> */}
    </div>
  );
}
function MovieDetails({movies}){
  // object destructuring {id}
  const {id}=useParams();
  const movie=movies[id]
  const history=useHistory();
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
    onClick={()=>history.goBack()}
    startIcon={<ArrowBackIosIcon />}>
      BACK</Button>

    </div>
    </div>
    )
 }
function NotFound(){
  return( 
  <div>
    <img src="https://cdn.dribbble.com/users/1676373/screenshots/4177728/404.gif"
    alt="404"
    />
    </div>
    )
}
function Welcome(){
  return <h1>Welcome</h1>
}
function TicTacToe(){
  return <Game  />
}
function Game(){
  const[board,setBoard]=useState([null,null,null,null,null,null,null,null,null])
const decideWinner=(board)=>{
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  
 for(let i=0;i<lines.length;i++){
   const [a,b,c]=lines[i];
   if(board[a]!==null && 
     board[a]===board[b]&&
     board[a]===board[c]) {
console.log("Winner", board[a])
return board[a] //if winner ,it return "X" or "O"
   }
 }
return null; //if no winner 
}
const winner = decideWinner(board)
const pic="https://cdn4.vectorstock.com/i/thumb-large/21/28/receiving-the-cartoon-achievement-game-screen-vector-24072128.jpg"

  const[isXTurn,setIsXTurn]=useState(true)
 const handleClick=(index)=>{
   //if no winner and is untouched then update it
  if(!winner && !board[index]) {
    const boardCopy =[...board]
    boardCopy[index]= isXTurn ? "X" : "O";
    setBoard(boardCopy);
    setIsXTurn(!isXTurn);
  }
   }
   const restart =()=>{
     setBoard([null,null,null,null,null,null,null,null,null])
  setIsXTurn(true);
    }
return(
  <div className="full-game">
      <h1 className="header">Welcome to TicTacToe</h1>

  <div className="board">
    {board.map((val,index)=>(
    <GameBox val={val} onPlayerClick={()=>handleClick(index)} />
    ))}

  </div>
  {/* <h1 className="header">Welcome to TicTacToe</h1> */}

  {isXTurn ? <h1>Turn of X</h1>:<h1>Turn of O</h1>}

     {winner ? <div><img className="winner-poster" src={pic} alt={winner} />
<h1> Winner is {winner} </h1></div>: " "}
      {/* <button onClick={restart}>RESTART</button> */}
      <div>
      <Button variant="contained" onClick={()=> setIsXTurn(true)}>X</Button>
      <Button variant="contained" onClick={()=> setIsXTurn(false)}>O</Button>
      </div>
      <Button variant="contained" 
       onClick={restart}>
      <RestartAltIcon />
      RESTART</Button>
      

      </div>
);
}

function GameBox({val,onPlayerClick}){
// const [value,setValue]=useState(val);
const styles={color:val==="X" ? "green" : "red"}
return(
  <div 
  style={styles}
  onClick={onPlayerClick}
className="game-box"
>
  {val} 
   </div>
)
}

export default App;
