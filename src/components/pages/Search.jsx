import Header from "../Header";
import { Link } from "react-router-dom";
const Search = ({
  items,
  setItems,
  defaultItems,
  cartItems,
  totalAmount,
  searchResutls,
  setSearchResutls,
  handleCount,
  handleAdd,
}) => {
  return (
    <>
      <div className="header">
        <Header
          items={items}
          setItems={setItems}
          defaultItems={defaultItems}
          cartItems={cartItems}
          totalAmount={totalAmount}
          searchResutls={searchResutls}
          setSearchResutls={setSearchResutls}
        />
      </div>
      <div className="main-section">
        <div className="main">
          {searchResutls.length <= 0 ? (
            <p className="no-results">No results</p>
          ) : (
            searchResutls.map((e) => (
              <div data-testid="search-div" className="item" key={e.id}>
                <img src={e.image}></img>
                <Link to={`/product/${e.id}`}>{e.title}</Link>
                <p>
                  <span>price:</span> ${e.price}
                </p>
                <p>
                  <span>Category:</span> {e.category}
                </p>
                <div className="add-container">
                  <div className="add">
                    <input
                      className="add-input"
                      id={e.id}
                      type="number"
                      max="99"
                      min="0"
                      maxLength="2"
                      onChange={(event) => handleCount(event, e.id)}
                    ></input>
                  </div>
                  <button onClick={(event) => handleAdd(event, e.id)}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
