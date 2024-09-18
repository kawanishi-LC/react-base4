export const ColorSelect = ({ results, selectedColor, setSelectedColor }) => {
  const option = results.map((data) => <option value={data.name}>{data.name}</option>);

  return (
    <label>
      Pokemon Color List
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {option}
      </select>
    </label>
  );
};

export default ColorSelect;
