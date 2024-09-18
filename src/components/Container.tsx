import { useState, useEffect } from "react";
import { ColorSelect } from "./ColorSelect";
import axios from "axios";

export const Container = () => {

  const [results, setResults] = useState([]);
  const [selectedColor, setSelectedColor] = useState("dammy");
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-color/`
        );
        console.log(response.data); //レスポンスデータはオブジェクト（resultsは配列）
        const results = response.data.results.map((result: { name: string; url: string; }) => ({
          name: result.name,
          url: result.url,
        }));
        console.log(results);
        setResults(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [imageUrlList, setImageUrlList] = useState([]);

  const btnclick2 = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-color/1/`
        );
        console.log(response.data); //レスポンスデータはオブジェクト（pokemon_speciesは配列）
        const species = response.data.pokemon_species.map(
          (specie: { name: string; url: string }) => ({
            name: specie.name,
            url: specie.url,
          })
        );
        console.log(species);
        setImageUrlList(species);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <>
      <div className="middle">
        <ColorSelect
          results={results}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
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

export default Container;
