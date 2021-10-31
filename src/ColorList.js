import { useState } from "react";
import { ColorBox } from './ColorBox';

 export function ColorList() {
  const [color, setColor] = useState("");
  const styles = { backgroundColor: color, color: "black" };
  const INITIAL_COLORS = ["crimson", "teal", "olive"];
  const [colors, setColors] = useState(INITIAL_COLORS);
  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color" />
      <button onClick={() => setColors([...colors, color])}>Add New Colour</button>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
