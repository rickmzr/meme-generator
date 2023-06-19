export default function Header(props) {
  return (
    <nav className="nav-bar">
      <div className="title">
        <img src={props.image} alt="Troll Face" />
        <p>Meme Generator</p>
      </div>
      <p className="sub-heading">React Course - Project 3</p>
    </nav>
  );
}
