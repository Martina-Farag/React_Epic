import { useSelector } from "react-redux";
import classes from "./CartGamesSummary.module.css";

const CartGamesSummary = () => {
  const totalPrice = useSelector((state) => state.games.totalPrice);
  return (
    <div className={classes.gamesSummary}>
      <h2>Games and Apps Summary</h2>
      <div className={classes.details}>
        <div className={classes.leftCol}>
          <h4>price</h4>
          <h4>taxes</h4>
          <h4>Subtotal</h4>
        </div>
        <div className={classes.rightCol}>
          <h4>{totalPrice}</h4>
          <h4>Calculated at Checkout</h4>
          <h4>{totalPrice}</h4>
        </div>
        {/* <div className={classes.line}></div> */}
      </div>
      <button>CHECK OUT</button>
    </div>
  );
};

export default CartGamesSummary;
