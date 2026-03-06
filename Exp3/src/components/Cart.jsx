import CartItem from "./CartItem";

function Cart({ cartItems, increaseQty, decreaseQty }) {

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart">

      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Cart Empty</p>}

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      ))}

      <h3>Total: ₹{total}</h3>

    </div>
  );
}

export default Cart;