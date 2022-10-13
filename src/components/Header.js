import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.categories}>
          <NavLink
            to="/women"
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
          >
            women
          </NavLink>
          <NavLink
            to="/men"
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
          >
            men
          </NavLink>
          <NavLink
            to="/kids"
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
          >
            kids
          </NavLink>
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
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Header;
