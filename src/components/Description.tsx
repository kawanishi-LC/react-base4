import { useState } from "react";
import { DogImage } from "./DogImage";

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg"
  );

  const btnclick = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogUrl(data.message);
      });
  };

  return (
    <>
      <div className="top">
        <div className="topleft">
          <p>犬の写真画像のサイトです！！</p>
        </div>
        <div className="topright">
          <DogImage imageUrl={dogUrl} />
          <button onClick={btnclick}>更新</button>
        </div>
      </div>
    </>
  );
};

export default Description;
