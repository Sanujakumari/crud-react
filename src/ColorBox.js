export function ColorBox({ color }) {
  const styles = {
    height: "70px",
    width: "100vh",
    background: color,
    margin: "10px 0px"
  };
  return <div style={styles}></div>;
}
