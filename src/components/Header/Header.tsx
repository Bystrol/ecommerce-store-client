import classes from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { PropsWithChildren, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { currencyActions } from "../../store/currencySlice"
import { cartActions } from "../../store/cartSlice"
import MiniCart from "../MiniCart/MiniCart"
import Navigation from "../Navigation/Navigation"
import { useUserRole } from "../../hooks/user/useUserRole"

const Header = (props: PropsWithChildren) => {
  const [showCurrencyList, setShowCurrencyList] = useState<boolean>(false)
  const [isRotated, setIsRotated] = useState<boolean>(false)
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false)
  const [btnBump, setBtnBump] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(false)

  const currencySign = useAppSelector((state) => state.currency.sign)
  const amount = useAppSelector((state) => state.cart.amount)
  const items = useAppSelector((state) => state.cart.items)
  const isVisible = useAppSelector((state) => state.cart.isVisible)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { isUserAdmin } = useUserRole()
  let isUserLoggedIn = localStorage.getItem("authToken") !== null

  useEffect(() => {
    setBtnBump(true)

    const timer = setTimeout(() => {
      setBtnBump(false)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  const toggleCurrencyListHandler = () => {
    setShowCurrencyList((state) => {
      return !state
    })

    setIsRotated((state) => {
      return !state
    })

    dispatch(cartActions.hideCart())
    setShowBackdrop(false)
    setShowNav(false)
  }

  const hideCurrencyListHandler = () => {
    setShowCurrencyList(false)
    setIsRotated(false)
  }

  const setCurrencyHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement
    localStorage.setItem("currency", target.textContent || "")
    dispatch(currencyActions.setCurrency(target.textContent || ""))
  }

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart())

    setShowBackdrop((state) => {
      return !state
    })

    setShowCurrencyList(false)
    setIsRotated(false)
    setShowNav(false)
  }

  const toggleNavHandler = () => {
    setShowNav((state) => {
      return !state
    })
    dispatch(cartActions.hideCart())
    setShowBackdrop(false)
    setShowCurrencyList(false)
    setIsRotated(false)
  }

  const hideNavHandler = () => {
    setShowNav(false)
  }

  const hideAllHandler = () => {
    dispatch(cartActions.hideCart())
    setShowBackdrop(false)
    setShowCurrencyList(false)
    setIsRotated(false)
    setShowNav(false)
  }

  const logHandler = () => {
    if (isUserLoggedIn) {
      localStorage.removeItem("authToken")
      window.location.reload()
    } else {
      navigate("/auth/login")
    }
  }

  const angleDownClass = isRotated ? classes.rotated : classes.down

  return (
    <>
      <div className={classes.header}>
        <div className={classes.bar}>
          <FontAwesomeIcon icon={["fas", "bars"]} onClick={toggleNavHandler} />
        </div>
        <Navigation show={showNav} onHide={hideNavHandler} />
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
          {isUserAdmin && (
            <NavLink
              to="/admin/add-product"
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
            >
              add product
            </NavLink>
          )}
        </div>
        <Link to="/">
          <FontAwesomeIcon
            icon={["fas", "shirt"]}
            className={classes.logo}
            onClick={hideAllHandler}
          />
        </Link>
        <div className={classes.payment}>
          <FontAwesomeIcon
            icon={isUserLoggedIn ? "right-from-bracket" : "user"}
            className={classes.user}
            onClick={logHandler}
          />
          <div className={classes.currency} onClick={toggleCurrencyListHandler}>
            {currencySign}
            <FontAwesomeIcon icon="angle-down" className={angleDownClass} />
          </div>
          <FontAwesomeIcon
            icon="cart-shopping"
            className={classes.cart}
            onClick={toggleCartHandler}
          />
          <div className={`${classes.amount} ${btnBump ? classes.bump : ""}`}>
            {amount}
          </div>
        </div>
        {showCurrencyList && (
          <ul className={classes.list} onClick={toggleCurrencyListHandler}>
            <li onClick={setCurrencyHandler}>USD</li>
            <li onClick={setCurrencyHandler}>EUR</li>
            <li onClick={setCurrencyHandler}>GBP</li>
          </ul>
        )}
        {isVisible && (
          <MiniCart
            onViewCart={toggleCartHandler}
            onCheckout={toggleCartHandler}
          />
        )}
      </div>

      <main onClick={hideCurrencyListHandler}>{props.children}</main>
      {showBackdrop && (
        <div className={classes.backdrop} onClick={toggleCartHandler} />
      )}
    </>
  )
}

export default Header
