import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyActions } from "../store/currencySlice";

const Header = (props) => {
  const [showCurrencyList, setShowCurrencyList] = useState(false);
  const currency = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();

  const toggleCurrencyListHandler = () => {
    setShowCurrencyList((state) => {
      return !state;
    });
  };

  const hideCurrencyListHandler = () => {
    setShowCurrencyList(false);
  };

  const setCurrencyHandler = (e) => {
    dispatch(currencyActions.setCurrency(e.target.textContent));
    setShowCurrencyList(false);
  };

  const Sign = () => {
    if (currency === "EUR") {
      return <FontAwesomeIcon icon="fa-euro-sign" />;
    } else if (currency === "GBP") {
      return <FontAwesomeIcon icon="fa-sterling-sign" />;
    }

    return <FontAwesomeIcon icon="fa-dollar-sign" />;
  };

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
            <FontAwesomeIcon icon="angle-down" className={classes.down} />
          </div>
          <FontAwesomeIcon icon="cart-shopping" className={classes.cart} />
        </div>
        {showCurrencyList && (
          <ul className={classes.container}>
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
      </div>
      <main className={classes.main} onClick={hideCurrencyListHandler}>
        {props.children}
      </main>
    </>
  );
};

export default Header;
