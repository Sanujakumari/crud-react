import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";

export function Movie({ name, poster, rating, summary ,id}) {
  const [show, setShow] = useState(true);
  const history=useHistory();
  // const styles={display: show? "block":"none"}
  return (
    <Card>
      <div className="movie-container">
        <img className="movie-poster" src={poster} alt={name} />
        <CardContent>

          <div className="movie-specs">
            <h3 className="movie-name">{name}{""}
            <IconButton
            onClick={()=>history.push("/movies/" + id)}
                color="primary"
                aria-label={"showbutton"}>
               < InfoIcon/>
              </IconButton>
              <IconButton
              className="movie-show-button"
                onClick={() => setShow(!show)}
                color="primary"
                aria-label={show ? "Hide" : "Show"}>
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}

              </IconButton>
            </h3>
            <p className="movie-rating">⭐{rating} </p>
          </div>
          <Counter />

          {/* <Button onClick={()=>setShow(!show)}
               className="movie-show-button"
               variant="contained">
               {show ? "Hide" : "Show" } Description
            </Button> */}

          {/* <button onClick={()=>setShow(!show)} className="movie-show-button">
              {show ? "Hide" : "Show" } Description</button> */}
          {show ? <p>{summary}</p> : ""}
        </CardContent>

      </div>
    </Card>
  );
}
