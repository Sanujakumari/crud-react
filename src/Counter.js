import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter_container">
      <IconButton className="like-dislike"
        onClick={() => setLike(like + 1)}
        color="primary"
        aria-label="upload picture">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton className="like-dislike"
        onClick={() => setDislike(dislike + 1)}
        color="primary"
        aria-label="upload picture">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
      {/* <button className="like-dislike" onClick={()=>setLike(like+1)}>👍{like}</button>
            <button className="like-dislike" onClick={()=>setDislike(dislike+1)}>👎{dislike}</button> */}
    </div>
  );
}
