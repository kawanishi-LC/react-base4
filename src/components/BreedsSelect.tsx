import { Dispatch, SetStateAction } from "react";

type props = {
  breeds: string[];
  selectedBreed: string;
  setSelectedBreed: Dispatch<SetStateAction<string>>;
};

export const BreedsSelect = (props: props) => {
  const { breeds, selectedBreed, setSelectedBreed } = props;
  const option = breeds.map((data) => <option value={data}>{data}</option>);

  return (
    <label>
      Breeds List
      <select
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        {option}
      </select>
    </label>
  );
};

export default BreedsSelect;
