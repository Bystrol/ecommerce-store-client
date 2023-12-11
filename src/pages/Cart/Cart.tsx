import { useState } from "react"
import classes from "./Cart.module.css"
import { useAppSelector } from "../../hooks/redux"
import checkout from "../../util/api/checkout"
import { ClipLoader } from "react-spinners"
import useExchangeRate from "../../hooks/exchange-rate/useExchangeRate"
import CartItem from "../../components/CartItem/CartItem"

const Cart = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { data: rates } = useExchangeRate()

  const amount = useAppSelector((state) => state.cart.amount)
  const total = useAppSelector((state) => state.cart.total)
  const currency = useAppSelector((state) => state.currency.currency)
  const items = useAppSelector((state) => state.cart.items)

  const checkoutHandler = async () => {
    await checkout({ setIsLoading, currency, items, rates })
  }

  const itemsArrayIsEmpty = items.length === 0

  const currencySign = currency === "EUR" ? "€" : currency === "GBP" ? "£" : "$"

  const checkoutBtnContent = isLoading ? (
    <ClipLoader color="#fff" size={20} />
  ) : (
    "Checkout"
  )

  return (
    <>
      {!itemsArrayIsEmpty && !rates && (
        <ClipLoader color="#000" size={30} className={classes.loader} />
      )}
      {!itemsArrayIsEmpty && rates && (
        <div className={classes.cart}>
          <div className={classes.title}>
            <p>Cart</p>
          </div>
          <ul className={classes.list}>
            {items.map((item, index) => {
              return (
                <CartItem
                  id={item.id}
                  key={index}
                  name={item.name}
                  price={item.price * rates[currency]}
                  amount={item.amount}
                  imageUrl={item.imageUrl}
                  size={item.size}
                  color={item.color}
                  type={item.type}
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
              <p>
                {currencySign + (total * rates[currency] * 0.21).toFixed(2)}
              </p>
              <p>{amount}</p>
              <p>{currencySign + (total * rates[currency]).toFixed(2)}</p>
            </div>
          </div>
          <button onClick={checkoutHandler}>{checkoutBtnContent}</button>
        </div>
      )}
      {itemsArrayIsEmpty && (
        <div className={classes.emptyCart}>
          <div className={classes.title}>
            <p>Cart</p>
          </div>
          <div className={classes.empty}>
            <p>Your cart is empty!</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
