import { useParams, useLocation, Link } from "react-router-dom";
import Header from "../Header";
import Sorting from "../Sorting";
import "../../App.css";
import { useEffect, useState } from "react";

const Store = ({
  items,
  setItems,
  defaultItems,
  cartItems,
  totalAmount,
  handleCount,
  handleAdd,
  addCountElement,
  setStoreItems,
  storeItems,
  searchResutls,
  setSearchResutls,
}) => {
  const { name } = useParams();

  const setSortFunction = (e) => {
    function compareByName(a, b) {
      return a.category.localeCompare(b.category);
    }
    let target = e.target.value;
    let list = [...items];
    target === "Price (Lowest)"
      ? list.sort((a, b) => a.price - b.price)
      : target === "Price (Highest)"
      ? list.sort((a, b) => a.price - b.price).reverse()
      : list.sort(compareByName);
    setStoreItems(list);
  };

  const setShowFunction = (e) => {
    let target = e.target.value;
    let temp;
    addCountElement = e;

    target === "Jewelery"
      ? (temp = defaultItems.filter((e) => e.category === "jewelery"))
      : target === "Electronics"
      ? (temp = defaultItems.filter((e) => e.category === "electronics"))
      : target === "Women"
      ? (temp = defaultItems.filter((e) => e.category === "women's clothing"))
      : target === "Men"
      ? (temp = defaultItems.filter((e) => e.category === `men's clothing`))
      : (temp = defaultItems);
    setStoreItems(temp);
  };

  return (
    <div>
      <div className="header">
        <Header
          items={items}
          setItems={setItems}
          defaultItems={defaultItems}
          cartItems={cartItems}
          totalAmount={totalAmount}
          setStoreItems={setStoreItems}
          searchResutls={searchResutls}
          setSearchResutls={setSearchResutls}
        />
      </div>
      <div className="main-section">
        <Sorting
          setSortFunction={setSortFunction}
          setShowFunction={setShowFunction}
        />
        <div className="main">
          {storeItems &&
            storeItems.map((e) => (
              <div data-testid="store-div" className="item" key={e.id}>
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
