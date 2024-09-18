import { useState } from "react";
import { DogImage } from "./DogImage";
import axios from "axios";

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg"
  );

  const btnclick = async () => {
      try {
        const response = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        console.log(response.data);
        setDogUrl(response.data.message);
      } catch (error) {
        console.log(error);
      }
  };
  btnclick();

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
