import React from "react";

export function GameBox({ val, onPlayerClick }) {
  // const [value,setValue]=useState(val);
  const styles = { color: val === "X" ? "green" : "red" };
  return (
    <div
      style={styles}
      onClick={onPlayerClick}
      className="game-box"
    >
      {val}
    </div>
  );
}
