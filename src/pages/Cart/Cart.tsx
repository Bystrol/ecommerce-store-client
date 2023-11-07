import classes from "./Cart.module.css"
import CartPageItem from "../../components/CartPageItem/CartPageItem"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { cartActions } from "../../store/cartSlice"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const amount = useAppSelector((state) => state.cart.amount)
  const total = useAppSelector((state) => state.cart.total)
  const currency = useAppSelector((state) => state.currency.currency)
  const items = useAppSelector((state) => state.cart.items)

  const itemsArrayIsEmpty = items.length === 0

  const Total = () => {
    if (currency === "EUR") {
      return (
        <>
          <FontAwesomeIcon icon={["fas", "euro-sign"]} />
          {(total * 1.025).toFixed(2)}
        </>
      )
    } else if (currency === "GBP") {
      return (
        <>
          <FontAwesomeIcon icon={["fas", "sterling-sign"]} />
          {(total * 0.8985).toFixed(2)}
        </>
      )
    }

    return (
      <>
        <FontAwesomeIcon icon={["fas", "dollar-sign"]} />
        {total.toFixed(2)}
      </>
    )
  }

  const Tax = () => {
    if (currency === "EUR") {
      return (
        <>
          <FontAwesomeIcon icon={["fas", "euro-sign"]} />
          {(total * 1.025 * 0.21).toFixed(2)}
        </>
      )
    } else if (currency === "GBP") {
      return (
        <>
          <FontAwesomeIcon icon={["fas", "sterling-sign"]} />
          {(total * 0.8985 * 0.21).toFixed(2)}
        </>
      )
    }

    return (
      <>
        <FontAwesomeIcon icon={["fas", "dollar-sign"]} />
        {(total * 0.21).toFixed(2)}
      </>
    )
  }

  const checkoutHandler = () => {
    setShowModal(true)

    const timer = setTimeout(() => {
      setShowModal(false)
      dispatch(cartActions.clearArray())
      navigate("/home")
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }

  return (
    <>
      {!itemsArrayIsEmpty && (
        <div className={classes.cart}>
          <div className={classes.title}>
            <p>cart</p>
          </div>
          <ul className={classes.list}>
            {items.map((item) => {
              return (
                <CartPageItem
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                  imageUrl={item.imageUrl}
                  size={item.size}
                  color={item.color}
                />
              )
            })}
          </ul>
          <div className={classes.summary}>
            <div className={classes.names}>
              <p>Tax 21%:</p>
              <p>Quantity:</p>
              <p>Total:</p>
            </div>
            <div className={classes.values}>
              <p>{<Tax />}</p>
              <p>{amount}</p>
              <p>{<Total />}</p>
            </div>
          </div>
          <button onClick={checkoutHandler}>order</button>
        </div>
      )}
      {itemsArrayIsEmpty && (
        <div className={classes.emptyCart}>
          <div className={classes.title}>
            <p>cart</p>
          </div>
          <div className={classes.empty}>
            <p>Your cart is empty!</p>
          </div>
        </div>
      )}
      {showModal && (
        <div className={classes.backdrop}>
          <div
            className={`${classes.modal} ${showModal ? classes.active : ""}`}
          >
            <p>Your order was sent successfully!</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
