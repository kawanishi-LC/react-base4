import { useState, useEffect } from "react";
import { BreedsSelect } from "./BreedsSelect";
import axios from "axios";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("dammy");

  //https://dog.ceo/api/breeds/list/all

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dog.ceo/api/breeds/list/all`,
        );
        console.log(response.data);
        const list = response.data.message;
        setBreeds(Object.keys(list));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [imageUrlList, setImageUrlList] = useState([]);

  const btnclick2 = async () => {
      try {
        const response = await axios.get(
          `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`
        );
        console.log(response.data);
        const list = response.data.message;
        setImageUrlList(list);
      } catch (error) {
        console.log(error);
      }
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
