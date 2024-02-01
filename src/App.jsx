import { useState, useEffect } from "react";
import Header from "../src/components/Header";

function App({
  items,
  setItems,
  defaultItems,
  totalAmount,
  cartItems,
  searchResutls,
  setSearchResutls,
}) {
  const [randomItems, setRandomItems] = useState([]);
  let id = 0;
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(items[Math.floor(Math.random() * items.length)]);
    }
    setRandomItems(arr);
  }, [items]);

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
      <div className="homepage-main">
        <h1>Featured Items :</h1>
        <div className="homepage-items-container">
          {randomItems &&
            randomItems.map((e) =>
              e != undefined ? (
                <div className="homepage-item" key={id++}>
                  <img src={e.image}></img>
                </div>
              ) : null
            )}
        </div>
      </div>
    </>
  );
}

export default App;
