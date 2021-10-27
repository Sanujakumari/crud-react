import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
  return (
    <div className="App">

    < PersonList />
    </div>
  );
}
function PersonList(){
  const INITIAL_DETAILS=[{
    id:"101",
    name:"Minu",
    age:"20",
    city:"Pune"
  },
  {
    id:"102",

    name:"Miya",
  age:"27",
  city:"Delhi"

  },
];
const [personDetails, setPersonDetails] = useState(INITIAL_DETAILS);
const [id, setId] = useState("");

const [name, setName] = useState("");
const [age, setAge] = useState("");
const [city, setCity] = useState("");

return (


<section>
      <div className="add-person-form">
      <TextField value={id}
          onChange={(event) => setId(event.target.value)} label="Id" variant="outlined" />

        <TextField value={name}
          onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
        <TextField value={age}
          onChange={(event) => setAge(event.target.value)} label="age" variant="outlined" />
        <TextField value={city}
          onChange={(event) => setCity(event.target.value)}
          label="city" variant="outlined" />
        </div>
        <div className="buttons">
        <Button onClick={() => {
          // console.log({name, age,city });
          const newpersonDetails = {id, name, age,city};
          setPersonDetails([...personDetails, newpersonDetails]);
          setId("");

          setName("");
          setAge("");
          setCity("");
        }} variant="contained">Add person</Button>
        
        <Button variant="contained">Delete person</Button>
        <Button variant="contained">Update person</Button>

        </div>



      <div className="App">
  {personDetails.map((user,index)=>(
      < Data

    key={index}
    id={user.id}

    name={user.name}
    age={user.age}
city={user.city}
/>
  )) }
</div>
</section>

)

}
function Data({id,name,age,city}){
return( 
  
  <div className= "container">
          <p className="id">Id: {id} </p>

      <p className="name">Name : {name} </p>
      <p className="age">Age : {age}</p>
      <p className="city">City : {city}</p>

      </div>
)
}

export default App;
