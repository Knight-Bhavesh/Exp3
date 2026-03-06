function Header({ cartCount }) {
  return (
    <div className="header">
      <h1>DA Homes</h1>
      <div className="cart-count">
        Cart: {cartCount}
      </div>
    </div>
  );
}

export default Header;