import "../index.css";

function Info(props) {
  return (
      <>
      <h2>SNEAKER COMPANY</h2>
      <h1 className="limited-edition">Fall Limited Edition Sneakers</h1>
      <p style={{color: props.show ? "black" : "hsl(219, 9%, 45%)"}} className="low-profile">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <div className="price2">
        <h1>$125.00</h1>
        <span>
          <h2>50%</h2>
        </span>
        </div>
        <p className="original-price" style={{ textDecoration: "line-through"}} >$250.00</p>
      </div>
</>

  );
}

export default Info;
