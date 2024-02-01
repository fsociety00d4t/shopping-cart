function Sorting({ setSortFunction, setShowFunction }) {
  return (
    <div className="sort-section">
      <label>
        <span>Show:</span>
        <select onChange={setShowFunction}>
          <option>All</option>
          <option>Electronics</option>
          <option>Jewelery</option>
          <option>Women</option>
          <option>Men</option>
        </select>
      </label>
      <label>
        <span>Sort By: </span>
        <select onChange={setSortFunction}>
          <option>Category</option>
          <option>Price (Lowest)</option>
          <option>Price (Highest)</option>
        </select>
      </label>
    </div>
  );
}

export default Sorting;
