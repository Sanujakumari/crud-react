import logo from './logo.svg';
import './App.css';
import {useState} from "react";

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
     {/* < MovieList /> */}
     <ColorBox />
    </div>
  );
}
function ColorBox(){
  const styles={backgroundColor :"crimson"}
  return <input style={styles} placeholder="Enter a color" />
}


function MovieList(){
  const movies= [
    {
    name:"Coco",
    poster:"https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
    rating:"8.4",
    summary:"Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer."
  },
  {
    name:"Ratatouille",
    poster:"https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
    rating:"8",
    summary:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
  },
  {
    name:"Luca",
    poster:"https://www.cinema.com/image_lib/16701_poster4.jpg",
    rating:"7.5",
    summary:"Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water's surface"
  },
  {
    name:"Disney Frozen",
    poster:"https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg",
    rating:"7.4",
    summary:"Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice."
  },
  {
    name:"Spider-Man",
    poster:"https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spiderman_verse_rating_0.jpg?itok=N_U_lGHQ",
    rating:"8.4",
    summary:"After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse."
  }
  ]
return(
  <div className="movie-list">
      {movies.map((mv)=>(
    <Movie 
      name={mv.name} 
      poster={mv.poster}
      rating={mv.rating} 
      summary={mv.summary}/>
    ))}
    </div>
)

}
function Movie({name,poster,rating,summary}){
  return(
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating">⭐{rating} </p>
     </div>
     <Counter />
     <p>{summary}</p>
    </div>
  )
}

function Counter(){
  const [like,setLike] =useState(0);
  const [dislike,setDislike] =useState(0);
  return(
    <div className="like-dislike">
      <button onClick={()=>setLike(like+1)}>👍{like}</button>
      <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
    </div>
  )
  }

function Msg({name, pic}){
return(
  <div>
    <img height="100" src={pic} alt={name}/>
    <h1 className ="name" > Hi, {name}</h1>
  </div>
);
}
export default App;
