import { useState } from "react";
import memesData from "../assets/memesData";

export default function Form(props) {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    let arrLength = memesData.data.memes.length;
    let rndNum = Math.floor(Math.random() * arrLength);
    setMemeImage(memesData.data.memes[rndNum].url);
  };

  return (
    <section>
      <div className="grid memeform">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
        <button className="submit-btn" type="submit" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme-img" src={memeImage} alt="Meme Image" />
    </section>
  );
}
