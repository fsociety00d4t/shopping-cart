import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "../App";
import Store from "../components/pages/Store";
import ErrorPage from "../components/errorElement";
import Product from "../components/Product";
import Cart from "../components/pages/Cart";
import Search from "../components/pages/Search";

const Router = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [defaultItems, setDefaultItems] = useState([]);
  const [storeItems, setStoreItems] = useState([]);
  const [searchResutls, setSearchResutls] = useState([]);

  let addCountElement = [];

  const handleCount = (e, id) => {
    let flag = false;
    addCountElement.map((e) => (e.id === id ? (flag = true) : null));
    flag = false
      ? addCountElement.push({ value: e.target.value, id: id })
      : null;
  };

  const handleAdd = (e, id) => {
    let amount = 0;
    let inputs = document.querySelectorAll(".add-input");
    inputs.forEach((e) => {
      e.id == id ? (amount = e.value) : null;
    });
    amount > 0
      ? setCartItems((current) => [...current, { amount: amount, id: id }])
      : null;

    setTotalAmount(totalAmount + Number(amount));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setItems(response);
        setDefaultItems(response);
        setStoreItems(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          items={items}
          setItems={setItems}
          defaultItems={defaultItems}
          totalAmount={totalAmount}
          cartItems={cartItems}
          searchResutls={searchResutls}
          setSearchResutls={setSearchResutls}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "home/",
      element: (
        <App
          items={items}
          setItems={setItems}
          defaultItems={defaultItems}
          totalAmount={totalAmount}
          cartItems={cartItems}
          searchResutls={searchResutls}
          setSearchResutls={setSearchResutls}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "store/",
      element: (
        <Store
          items={items}
          setItems={setItems}
          defaultItems={defaultItems}
          setDefaultItems={setDefaultItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          handleCount={handleCount}
          handleAdd={handleAdd}
          storeItems={storeItems}
          setStoreItems={setStoreItems}
          searchResutls={searchResutls}
          setSearchResutls={setSearchResutls}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/product/:id",
      element: (
        <Product
          items={items}
          setItems={setItems}
          defaultItems={defaultItems}
          setDefaultItems={setDefaultItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          handleCount={handleCount}
          handleAdd={handleAdd}
          addCountElement={addCountElement}
          searchResutls={searchResutls}
          setSearchResutls={setSearchResutls}
        />
      ),
    },
    {
      path: "cart/",
      element: (
        <Cart
          items={items}
          setItems={setItems}
          defaultItems={defaultItems}
          setDefaultItems={setDefaultItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          handleCount={handleCount}
          handleAdd={handleAdd}
          addCountElement={addCountElement}
          searchResutls={searchResutls}
          setSearchResutls={setSearchResutls}
        />
      ),
    },
    {
      path: "search/",
      element: (
        <Search
          items={items}
          setItems={setItems}
          cartItems={cartItems}
          totalAmount={totalAmount}
          searchResutls={searchResutls}
          setSearchResutls={setSearchResutls}
          handleCount={handleCount}
          handleAdd={handleAdd}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
