import { useState, useEffect } from "react";
import { BreedsSelect } from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("dammy");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const list = data.message;
        setBreeds(Object.keys(list));
      });
  }, []);

  const [imageUrlList, setImageUrlList] = useState([]);

  const btnclick2 = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImageUrlList(data.message);
      });
  };

  return (
    <>
      <div className="middle">
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
        <button onClick={btnclick2}>表示</button>
      </div>
      <div className="bottom">
        <ul>
          {imageUrlList.map((imageurl, index) => (
            <li key={index}>
              <img src={imageurl} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DogListContainer;
