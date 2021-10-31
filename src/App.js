import logo from './logo.svg';
import './App.css';
import { margin } from '@mui/system';
import { MovieList } from './MovieList';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


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
  return(
    <div className="App">
      {/* {users.map((user)=>(
        <Msg name={user.name} pic={user.pic} />
      ))} */}
     < MovieList />
     {/* <ColorList /> */}
    </div>
  );
}

export default App;
