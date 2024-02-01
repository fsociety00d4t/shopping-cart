import magnify from "../assets/magnify.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Header({
  items,
  setItems,
  defaultItems,
  cartItems,
  totalAmount,
  setStoreItems,
  setHomeItems,
  searchResutls,
  setSearchResutls,
}) {
  const [search, setSearch] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  function handleStoreClick() {
    navigate("/store");
  }

  function handleHomeClick() {
    navigate("/home");
  }

  function handleCartClick() {
    //  navigate("/cart", { state: cartItems });
    navigate("/cart");
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSearch() {
    let x;
    let temp = [];
    items.map((item) => {
      x = item.title.toLowerCase().match(search.toLowerCase());
      x && !temp.includes(item) ? temp.push(item) : null;
      setSearchResutls(temp);
    });

    //setItems(arr);
    /* pathname == "/store"
      ? setStoreItems(arr)
      : pathname == "/home" || pathname == "/"
      ? setHomeItems(arr)
      : null; */

    navigate("/search");
  }

  return (
    <>
      <div className="title">
        <button className="main-btn link" onClick={handleHomeClick}>
          e-shop
        </button>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" onChange={handleChange}></input>
        <img
          src={magnify}
          height="20px"
          className="search-icon"
          onClick={handleSearch}
        ></img>
      </div>
      <div className="pages-links">
        <button className="home link" onClick={handleHomeClick}>
          Home
        </button>
        <button className="store link" onClick={handleStoreClick}>
          Store
        </button>
        <img
          className="link"
          src={cart}
          width="30px"
          onClick={handleCartClick}
        ></img>
        <p className="count">{totalAmount}</p>
      </div>
    </>
  );
}

export default Header;
