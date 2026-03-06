function CartItem({ item, increaseQty, decreaseQty }) {

  return (
    <div className="cart-item">

      <img src={item.image} alt={item.name} />

      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
      </div>

      <div className="qty-buttons">

        <button onClick={() => decreaseQty(item.id)}>
          -
        </button>

        <span>{item.qty}</span>

        <button onClick={() => increaseQty(item.id)}>
          +
        </button>

      </div>

    </div>
  );
}

export default CartItem;