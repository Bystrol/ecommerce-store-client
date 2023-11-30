import classes from "./MiniCart.module.css"
import CartItem from "../CartItem/CartItem"
import { ClipLoader } from "react-spinners"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useAppSelector } from "../../hooks/redux"
import checkout from "../../util/api/checkout"
import useExchangeRate from "../../hooks/exchange-rate/useExchangeRate"

type MiniCartProps = {
  onViewCart: () => void
}

const MiniCart = (props: MiniCartProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const { data: rates } = useExchangeRate()

  const amount = useAppSelector((state) => state.cart.amount)
  const total = useAppSelector((state) => state.cart.total)
  const currency = useAppSelector((state) => state.currency.currency)
  const currencySign = useAppSelector((state) => state.currency.sign)
  const items = useAppSelector((state) => state.cart.items)

  const itemsArrayIsEmpty = items.length === 0

  const openCartPageHandler = () => {
    navigate("/cart")
    props.onViewCart()
  }

  const checkoutHandler = async () => {
    await checkout({ setIsLoading, currency, items, rates })
  }

  const checkoutBtnContent = isLoading ? (
    <ClipLoader color="#fff" size={20} />
  ) : (
    "Checkout"
  )

  return (
    <>
      {!itemsArrayIsEmpty ? (
        <div className={classes.cart}>
          <div className={classes.title}>
            <p>
              <b>My Cart</b>, {amount} items
            </p>
          </div>
          <ul className={classes.list}>
            {items.map((item) => {
              return (
                <CartItem
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
          <div className={classes.total}>
            <p>Total</p>
            <p>
              {rates
                ? currencySign + (total * rates[currency]).toFixed(2)
                : currencySign + "...?"}
            </p>
          </div>
          <div className={classes.buttons}>
            <button onClick={openCartPageHandler}>view cart</button>
            <button onClick={checkoutHandler}>{checkoutBtnContent}</button>
          </div>
        </div>
      ) : (
        <div className={classes.empty}>
          <p>Your cart is empty!</p>
        </div>
      )}
    </>
  )
}

export default MiniCart
