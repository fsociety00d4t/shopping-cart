import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

const Product = ({
  items,
  setItems,
  defaultItems,
  cartItems,
  totalAmount,
  handleCount,
  handleAdd,
  searchResutls,
  setSearchResutls,
}) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
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
          searchResutls={searchResutls}
          setSearchResutls={setSearchResutls}
        />
      </div>
      <div className="product-container">
        <div className="product">
          <img src={data.image}></img>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>
            <span>price:</span> ${data.price}
          </p>
          <p>
            <span>Category:</span> {data.category}
          </p>
          <div className="add-container">
            <div className="add">
              <input
                className="add-input"
                id={id}
                type="number"
                max="99"
                min="0"
                maxLength="2"
                onChange={(event) => handleCount(event, id)}
              ></input>
            </div>
            <button onClick={(event) => handleAdd(event, Number(id))}>
              Add to cart
            </button>
          </div>
        </div>
        <Link to="/store">Go back to store</Link>
      </div>
    </div>
  );
};

export default Product;
