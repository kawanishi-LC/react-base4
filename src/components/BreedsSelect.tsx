export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
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
