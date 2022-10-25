import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router";

const Cart = (props) => {
  const navigate = useNavigate();

  const openCartPageHandler = () => {
    navigate("/cart");
    props.onViewCart();
  };

  return (
    <div className={classes.cart}>
      <div className={classes.title}>
        <p>
          <b>My Cart</b>, 3 items
        </p>
      </div>
      <ul className={classes.list}>
        <CartItem id="1" name="test1" />
        <CartItem id="2" name="test2" />
        <CartItem id="3" name="test3" />
      </ul>
      <div className={classes.total}>
        <p>Total</p>
        <p>$200.00</p>
      </div>
      <div className={classes.buttons}>
        <button onClick={openCartPageHandler}>view cart</button>
        <button>check out</button>
      </div>
    </div>
  );
};

export default Cart;
