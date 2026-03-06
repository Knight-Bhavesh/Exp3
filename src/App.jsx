import { useState, useEffect } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import foods from "./data/foodData";
import "./styles/styles.css";

function App() {

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(food) {

    const exist = cartItems.find(item => item.id === food.id);

    if (exist) {
      setCartItems(
        cartItems.map(item =>
          item.id === food.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, qty: 1 }]);
    }

  }

  function increaseQty(id) {

    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );

  }

  function decreaseQty(id) {

    setCartItems(
      cartItems
        .map(item =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );

  }

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <div>

      <Header cartCount={cartCount} />

      <FoodList
        foods={foods}
        addToCart={addToCart}
      />

      <Cart
        cartItems={cartItems}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />

    </div>
  );
}

export default App;