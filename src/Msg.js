function Msg({ name, pic }) {
  return (
    <div>
      <img height="100" src={pic} alt={name} />
      <h1 className="name"> Hi, {name}</h1>
    </div>
  );
}
