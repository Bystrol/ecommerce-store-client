import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyActions } from "../store/currencySlice";
import Cart from "./Cart";

const Header = (props) => {
  const [showCurrencyList, setShowCurrencyList] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const currency = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();

  const toggleCurrencyListHandler = () => {
    setShowCurrencyList((state) => {
      return !state;
    });

    setIsRotated((state) => {
      return !state;
    });

    setShowCart(false);
    setShowBackdrop(false);
  };

  const hideCurrencyListHandler = () => {
    setShowCurrencyList(false);
    setIsRotated(false);
  };

  const setCurrencyHandler = (e) => {
    dispatch(currencyActions.setCurrency(e.target.textContent));
  };

  const toggleCartHandler = () => {
    setShowCart((state) => {
      return !state;
    });

    setShowBackdrop((state) => {
      return !state;
    });

    setShowCurrencyList(false);
    setIsRotated(false);
  };

  const Sign = () => {
    if (currency === "EUR") {
      return <FontAwesomeIcon icon="fa-euro-sign" />;
    } else if (currency === "GBP") {
      return <FontAwesomeIcon icon="fa-sterling-sign" />;
    }

    return <FontAwesomeIcon icon="fa-dollar-sign" />;
  };

  const angleDownClass = isRotated ? classes.rotated : classes.down;

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
        <Link to="/home">
          <FontAwesomeIcon icon="fa-shirt" className={classes.logo} />
        </Link>
        <div className={classes.payment}>
          <div className={classes.currency} onClick={toggleCurrencyListHandler}>
            {<Sign />}
            <FontAwesomeIcon icon="angle-down" className={angleDownClass} />
          </div>
          <FontAwesomeIcon
            icon="cart-shopping"
            className={classes.cart}
            onClick={toggleCartHandler}
          />
        </div>
        {showCurrencyList && (
          <ul className={classes.container} onClick={toggleCurrencyListHandler}>
            <li onClick={setCurrencyHandler}>
              <FontAwesomeIcon icon="fa-dollar-sign" className={classes.sign} />
              USD
            </li>
            <li onClick={setCurrencyHandler}>
              <FontAwesomeIcon icon="fa-euro-sign" className={classes.sign} />
              EUR
            </li>
            <li onClick={setCurrencyHandler}>
              <FontAwesomeIcon
                icon="fa-sterling-sign"
                className={classes.sign}
              />
              GBP
            </li>
          </ul>
        )}
        {showCart && <Cart onViewCart={toggleCartHandler} />}
      </div>

      <main onClick={hideCurrencyListHandler}>{props.children}</main>
      {showBackdrop && (
        <div className={classes.backdrop} onClick={toggleCartHandler} />
      )}
    </>
  );
};

export default Header;
