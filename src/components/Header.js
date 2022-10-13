import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.categories}>
        <h2>WOMEN</h2>
        <h2>MEN</h2>
        <h2>KIDS</h2>
      </div>
      <img src="" className={classes.logo} />
      <div className={classes.payment}>
        <p>
          $<FontAwesomeIcon icon="fa-light fa-angle-down" />
        </p>
        <FontAwesomeIcon icon="fa-light fa-cart-shopping" />
      </div>
    </div>
  );
};

export default Header;
