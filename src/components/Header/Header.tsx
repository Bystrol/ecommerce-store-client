import classes from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { currencyActions } from "../../store/currencySlice"
import MiniCart from "../MiniCart/MiniCart"
import Navigation from "../Navigation/Navigation"
import useDropdownVisibility from "../../hooks/dropdown/useDropdownVisibility"
import useNavigationLinks from "../../hooks/navigation/useNavigationLinks"

const Header = () => {
  const [btnBump, setBtnBump] = useState<boolean>(false)

  const currencySign = useAppSelector((state) => state.currency.sign)
  const amount = useAppSelector((state) => state.cart.amount)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const navLinks = useNavigationLinks()

  const {
    showNav,
    setShowNav,
    showCurrencyList,
    setShowCurrencyList,
    showCart,
    setShowCart,
    navRef,
    currencyListRef,
    cartRef,
  } = useDropdownVisibility()

  const isUserLoggedIn = localStorage.getItem("authToken") !== null

  const toggleCurrencyListHandler = () => {
    setShowCurrencyList((state) => !state)
  }

  const setCurrencyHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement
    dispatch(currencyActions.setCurrency(target.textContent || ""))
    localStorage.setItem("currency", target.textContent || "")
  }

  const toggleCartHandler = () => {
    setShowCart((state) => !state)
  }

  const toggleNavHandler = () => {
    setShowNav((state) => !state)
  }

  const logHandler = () => {
    if (isUserLoggedIn) {
      localStorage.removeItem("authToken")
      navigate("/")
      window.location.reload()
    } else {
      navigate("/auth/login")
    }
  }

  useEffect(() => {
    setBtnBump(true)

    const timer = setTimeout(() => {
      setBtnBump(false)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [amount])

  const currencies: { currency: string }[] = [
    {
      currency: "USD",
    },
    {
      currency: "EUR",
    },
    {
      currency: "GBP",
    },
  ]

  return (
    <>
      <header className={classes.header}>
        <div className={classes.bar} ref={navRef}>
          <FontAwesomeIcon
            icon={["fas", `${showNav ? "x" : "bars"}`]}
            onClick={toggleNavHandler}
          />
        </div>
        <Navigation show={showNav} />
        <div className={classes.categories}>
          {navLinks.map((link) => {
            return (
              <div key={link.categoryName}>
                {link.canBeAccessed && (
                  <NavLink
                    to={link.path}
                    className={(navData) =>
                      navData.isActive ? classes.active : classes.link
                    }
                  >
                    {link.categoryName}
                  </NavLink>
                )}
              </div>
            )
          })}
        </div>
        <Link to="/">
          <FontAwesomeIcon icon={["fas", "shirt"]} className={classes.logo} />
        </Link>
        <div className={classes["user-section"]}>
          <FontAwesomeIcon
            icon={isUserLoggedIn ? "right-from-bracket" : "user"}
            className={classes["log-btn"]}
            onClick={logHandler}
          />
          {isUserLoggedIn && (
            <NavLink
              to="/orders"
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
            >
              <FontAwesomeIcon icon="truck" className={classes.order} />
            </NavLink>
          )}
          <div
            className={classes.currency}
            onClick={toggleCurrencyListHandler}
            ref={currencyListRef}
          >
            {currencySign}
            <FontAwesomeIcon
              icon="angle-down"
              className={showCurrencyList ? classes.rotated : classes.down}
            />
          </div>
          <FontAwesomeIcon
            ref={cartRef}
            icon="cart-shopping"
            className={classes.cart}
            onClick={toggleCartHandler}
          />
          <div className={`${classes.amount} ${btnBump ? classes.bump : ""}`}>
            {amount}
          </div>
        </div>
        {showCurrencyList && (
          <ul className={classes.list}>
            {currencies.map((item) => {
              return (
                <li key={item.currency} onClick={setCurrencyHandler}>
                  {item.currency}
                </li>
              )
            })}
          </ul>
        )}
        {showCart && <MiniCart onViewCart={toggleCartHandler} />}
      </header>
    </>
  )
}

export default Header
