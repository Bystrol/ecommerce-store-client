import classes from "./ClothItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ClothItem = () => {
  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img
          src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Pink coat"
        />
      </div>
      <Link to="/cart" className={classes.button}>
        <FontAwesomeIcon icon="cart-shopping" className={classes.cart} />
      </Link>
      <p className={classes.name}>Pink coat</p>
      <p className={classes.price}>$29.99</p>
    </div>
  );
};

export default ClothItem;
