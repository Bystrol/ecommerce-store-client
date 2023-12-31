import classes from "./ClothItem.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { cartActions } from "../../store/cartSlice"
import useExchangeRate from "../../hooks/exchange-rate/useExchangeRate"

type ClothItemProps = {
  description: string
  id: string
  imageUrl: string
  isAvailable: boolean
  name: string
  price: number
  type: string
}

const ClothItem = (props: ClothItemProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const currency = useAppSelector((state) => state.currency.currency)
  const currencySign = useAppSelector((state) => state.currency.sign)
  const { data: rates } = useExchangeRate()

  const isAvailable = props.isAvailable

  const openDetailHandler = () => {
    if (!isAvailable) return
    navigate(`./${props.id}`)
  }

  const addToCartHandler = () => {
    if (!isAvailable) return
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: 1,
        size: props.type === "cloth" ? "xs" : "41",
        color: "brown",
        type: props.type,
      })
    )
  }

  const price =
    currency === "USD"
      ? props.price
      : rates
      ? (props.price * rates[currency]).toFixed(2)
      : "...?"

  return (
    <div className={classes.item}>
      <div className={classes.image} onClick={openDetailHandler}>
        {!isAvailable && <p>Out of stock</p>}
        <img
          src={props.imageUrl}
          alt="Pink coat"
          className={!isAvailable ? classes["not-available"] : ""}
        />
      </div>
      <button
        className={!isAvailable ? classes["not-available"] : ""}
        onClick={addToCartHandler}
      >
        <FontAwesomeIcon icon="cart-shopping" className={classes.cart} />
      </button>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.price}>{currencySign + price}</p>
    </div>
  )
}

export default ClothItem
