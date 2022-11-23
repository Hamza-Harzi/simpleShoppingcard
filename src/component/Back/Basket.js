const Basket = (props) => {

  const {cartItems, onAdd}= props
  return (
    <aside className="block1 .col-2">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
    </aside>
  );
};

export default Basket;
