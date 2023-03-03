import React, { useState, useEffect, useRef } from "react";
import Header from "./Components/Header";
import Sneakers from "./Components/Sneakers";
import CartItem from "./Components/CartItem";
import Info from "./Components/Info";
import { dataSlider } from "./Components/dataSlider";
import close from "./images/icon-close.svg";
import minus from "./images/icon-minus.svg";
import add from "./images/icon-plus.svg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg"
import thumbnail2 from "./images/image-product-2-thumbnail.jpg"
import thumbnail3 from "./images/image-product-3-thumbnail.jpg"
import thumbnail4 from "./images/image-product-4-thumbnail.jpg"


function App() {
  const [showHeader, setHeader] = useState(false);
  const sideNavRef = useRef(null);
  const [show, setShow] = useState(false);
  const [qty, setqty] = useState(0);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([
    {
      quantity: 0,
      total: 0,
    },
  ]);

  const price = 125;

  function handleClick() {
    setHeader(true);
  }

  function handleClose() {
    setHeader(false);
  }

  function addQuantity() {
    setqty(qty + 1);
  }

  function reduceQuantity() {
    if (qty > 0) {
      setqty(qty - 1);
    }
  }

  function addToCart() {
    setCount(count + qty);
    if (qty > 0 && count) {
      setCart([{ quantity: qty + count, total: (count + qty) * price }]);
    } else {
      setCart([{ quantity: qty, total: qty * price }]);
    }

    setqty(0);
  }

  console.log({ cart });

  function showCart() {
    setShow(!show);
  }

  function deleteCart() {
    setCart([{ quantity: 0, total: 0 }]);
    setqty(0)
    setCount(0)
  }

  function handleClickOutside(event) {
    if (!sideNavRef.current.contains(event.target)) {
      setHeader(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <div
        className="header-list"
        style={{ display: showHeader ? "flex" : "none" }}
        ref={sideNavRef}
      >
        <button onClick={handleClose}>
          <img src={close} alt="" />
        </button>
        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
      </div>

     
      <div className={showHeader ? "cover covering" : ""}>
        <div className="App">
          <Header
            show={showHeader}
            set={handleClick}
            showCart={showCart}
            qty={qty}
            count={count}
            checkQty={count === 0}
          />
          {cart.map((item, index) => {
            console.log(index);
            return (
              <CartItem
                key={index}
                id={item.id}
                quantity={item.quantity}
                price={item.total}
                show={show}
                deleteCart={deleteCart}
              />
            );
          })}
          <div className="sneaker-info">
           <div className="select-sneaker-section">
          <Sneakers slides={dataSlider} show={showHeader} />
          <div className="thumbnail">
          <img src={thumbnail1} alt="" style={{height: "70px"}}></img>
            <img src={thumbnail2} alt="" style={{height: "70px"}}></img>
            <img src={thumbnail3} alt="" style={{height: "70px"}}></img>
            <img src={thumbnail4} alt="" style={{height: "70px"}}></img>
            </div>
            </div>
            
          
         
          <div className="info">
            <Info show={showHeader} />
            <span className="btn-section">
            <div
              className="item-counter"
              style={{ opacity: showHeader ? "0.6" : "1" }}
            >
              <img src={minus} alt="" onClick={reduceQuantity} style={{cursor: "pointer"}} className="minus"/>
              <p>{qty}</p>
              <img src={add} alt="" onClick={addQuantity} style={{cursor: "pointer"}} className="add"/>
            </div>

            <button
              className="add-cart-btn"
              style={{ opacity: showHeader ? "0.6" : "1" }}
              onClick={addToCart}
            >
              <p>Add to cart</p>
            </button>
            </span>
          </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default App;
