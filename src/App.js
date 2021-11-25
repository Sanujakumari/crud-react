import logo from './logo.svg';
import './App.css';
import { margin } from '@mui/system';
import { MovieList } from './MovieList';
import {ColorList} from './ColorList'
import React from "react";
import ReactDOM from "react-dom"
import {Switch, Route, Link,Redirect}  from "react-router-dom"; 
import {AddMovie} from "./AddMovie";
import {useState,useEffect} from "react"
import {useHistory} from "react-router-dom"
import Button from '@mui/material/Button';
import {EditMovie} from "./EditMovie"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TheatersIcon from '@mui/icons-material/Theaters';
import AddIcon from '@mui/icons-material/Add';
import PaletteIcon from '@mui/icons-material/Palette';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Welcome } from './Welcome';
import { NotFound } from './NotFound';
import { TicTacToe } from './TicTacToe';
import { MovieDetails } from './MovieDetails.1';
import {BasicForm} from './BasicForm';


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
  
  const [mode,setMode]=useState("dark")
  const [movies, setMovies] = useState([]);
  const history=useHistory();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  useEffect(()=>{
    fetch("https://6188b885d0821900178d74e6.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mvs)=>setMovies(mvs))
  },[])
  return(
    <ThemeProvider theme={theme}>
<Paper style={{minHeight:"100vh"}}elevation={2}>

    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button startIcon={<HomeIcon />} onClick={()=>history.push("/")} color="inherit">Home</Button>
        <Button startIcon={<TheatersIcon />}
        onClick={()=>history.push("/movies")} color="inherit">Movies</Button>
        <Button startIcon={<AddIcon />}
        onClick={()=>history.push("/movies/add")} color="inherit">Add Movie</Button>
        <Button startIcon={<PaletteIcon />}
        onClick={()=>history.push("/color-game")} color="inherit">Color Game</Button>
        <Button startIcon={<SportsEsportsIcon />}
        onClick={()=>history.push("/tictactoe")} color="inherit">Tic Tac Toe Game</Button>
         <Button startIcon={<AddIcon />}
        onClick={()=>history.push("/form")} color="inherit">FORM</Button>
        <Button startIcon={mode=="light"? <Brightness4Icon />: <LightModeOutlinedIcon />}
         onClick={()=>setMode(mode=="light"? "dark":"light")}
        style={{marginLeft:"auto"}} color="inherit"> 
        {mode=="light"? "dark":"light"}mode
        </Button>

        </Toolbar>
      </AppBar>
    </Box>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/movies/add">Add Movie</Link></li>
          <li><Link to="/color-game">Color Game</Link></li>
          <li><Link to="/tictactoe">Tic Tac Toe Game</Link></li>

        </ul>
      </nav> */}
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
        <AddMovie />   

        </Route>
        <Route path="/form">
        <BasicForm />   

        </Route>
        <Route path="/movies/:id">
        <MovieDetails />
        </Route>
        <Route exact path="/movies/edit/:id">
        <EditMovie />   

        </Route>
        <Route path="/movies">
        < MovieList />

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
    </Paper>
    </ThemeProvider>
  );
}
export default App;
