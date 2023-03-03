

import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

import "../index.css";

function Header(props) {
 
  return (
    <div className="header">
   
   
      <div className="header-component1">
        <button
          className="menu"
          style={{ cursor: "pointer", background: "none", border: "0" }}
          onClick={() => props.set()}
        >
          <img src={menu} alt="" />
        </button>
        <img src={logo} alt="" />
      </div>
      <div className="desktop-header">
     <a href="collections"><p>Collections</p></a> 
       <a href="men"> <p>Men</p></a>
       <a href="women"><p>Women</p></a>
       <a href="about"><p>About</p></a>
       <a href="contact"><p>Contact</p></a>
      </div>

      <div className="header-component2">
      <span className="cart-section">
      <div className="display-quantity" style={{display: props.checkQty ? "none" : "flex"}}>
        <p>{ props.qty + props.count }</p>
      </div>
        <img src={cart} alt="" onClick={() => props.showCart()} style={{cursor: "pointer"}}/>
        </span>
        <img src={avatar} alt="" className="Avatar"/>
      </div>
    </div>
  );
}

export default Header;
