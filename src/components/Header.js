import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.categories}>
        <p>women</p>
        <p>men</p>
        <p>kids</p>
      </div>
      <FontAwesomeIcon icon="fa-shirt" className={classes.logo} />
      <div className={classes.payment}>
        <p>
          <FontAwesomeIcon icon="fa-dollar-sign" className={classes.dollar} />
          <FontAwesomeIcon icon="angle-down" className={classes.down} />
        </p>
        <FontAwesomeIcon icon="cart-shopping" className={classes.cart} />
      </div>
    </div>
  );
};

export default Header;
