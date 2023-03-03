import sneaker from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";

function CartItem(props) {
  return (
    <div className="cart" style={{ display: props.show ? "block" : "none" }}>
      <p className="cart-p">Cart</p>
      <hr />
      {props.quantity > 0 ? (
        <div>
          <div className="cart-info">
            <img src={sneaker} alt="" className="sneaker-img"/>
            <span className="limited-section">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 X {props.quantity} ${props.price}
              </p>
            </span>
            <img src={deleteIcon} alt="" style={{ height: "20px" }} onClick={()=> props.deleteCart()}/>
          </div>
          <button className="checkout-btn" onClick={()=> props.deleteCart()}>
            <p>Checkout</p>
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <p style={{fontWeight: "700", marginTop: "-30px"}}>Your Cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default CartItem;
