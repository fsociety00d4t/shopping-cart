import { useLocation, Link } from "react-router-dom";
import Header from "../Header";
import { useState, useEffect } from "react";

const Cart = ({
  items,
  setItems,
  defaultItems,
  cartItems,
  setCartItems,
  totalAmount,
  setTotalAmount,
  searchResutls,
  setSearchResutls,
}) => {
  const [total, setTotal] = useState(0);
  const [localCart, setLocalCart] = useState([]);
  let allItems = cartItems;
  let temp = [];
  let localTemp = [];
  let tempTotal = 0;

  //console.log(items);
  //console.log(cartItems);
  useEffect(() => {
    let ids = cartItems.map((el) => Number(el.id));
    temp = items.filter((e) => ids.includes(e.id));

    temp.forEach((el) => {
      let count = 0;
      allItems.forEach((elem) => {
        elem.id == el.id ? (count += Number(elem.amount)) : null;
      });
      el.amount = count;
    });

    setLocalCart(temp);
    calculateTotal();
  }, [items]);

  const deleteItem = (e, id) => {
    let test;
    handleTotal(id);
    test = cartItems.filter((el) => el.id !== id);
    setCartItems(test);
    localTemp = localCart.filter((el) => el.id !== id);
    temp = localTemp;
    setLocalCart(localTemp);
    calculateTotal();
  };

  const calculateTotal = () => {
    tempTotal = 0;
    temp.forEach((el) => {
      tempTotal += el.amount * el.price;
    });
    tempTotal = tempTotal.toFixed(2);
    setTotal(tempTotal);
  };

  const handleTotal = (id) => {
    let amount;
    let newAmount;
    amount = localCart.filter((el) => el.id === id).map((el) => el.amount);
    newAmount = Number(totalAmount) - Number(amount[0]);
    setTotalAmount(newAmount);
  };

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
      <div className="cart-main">
        <div className="cart-container">
          {localCart &&
            localCart.map((e) => (
              <div data-testid="cart-divs" className="item" key={e.id}>
                <img src={e.image}></img>
                <Link to={`/product/${e.id}`}>{e.title}</Link>
                <p>
                  <span>amount:</span> {e.amount}
                </p>
                <p>
                  <span>Total price:</span> ${e.price * e.amount}
                </p>
                <button
                  className="delete"
                  onClick={(event) => deleteItem(event, e.id)}
                >
                  Delete item
                </button>
              </div>
            ))}
        </div>
        <p>
          <span className="total">Total: </span>${total}
        </p>
        <button className="checkout">checkout</button>
      </div>
    </>
  );
};

export default Cart;
