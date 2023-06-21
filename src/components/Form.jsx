import memesData from "../assets/memesData";

export default function Form(props) {
  const randomImage = (memesData) => {
    let arrLength = memesData.data.memes.length;
    let rndNum = Math.floor(Math.random() * arrLength);
    return memesData.data.memes[rndNum].url;
  };

  return (
    <div className="grid memeform">
      <input type="text" placeholder="Top Text" />
      <input type="text" placeholder="Bottom Text" />
      <button
        className="submit-btn"
        type="submit"
        onClick={() => console.log(randomImage(memesData))}
      >
        Get a new meme image 🖼
      </button>
    </div>
  );
}
