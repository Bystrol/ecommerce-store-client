import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { cartActions } from "../../store/cartSlice"
import classes from "./CartItem.module.css"
import { CartItem as CartItemTypes } from "../../types/product"
import useExchangeRate from "../../hooks/exchange-rate/useExchangeRate"
import { clothSizes, shoeSizes, colors } from "../../constants/products"

type CartItemProps = CartItemTypes

const CartItem = (props: CartItemProps) => {
  const sizes = props.type === "cloth" ? clothSizes : shoeSizes

  const { size, color } = props

  const dispatch = useAppDispatch()
  const currency = useAppSelector((state) => state.currency.currency)
  const currencySign = useAppSelector((state) => state.currency.sign)
  const { data: rates } = useExchangeRate()

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: 1,
        size: size,
        color: color,
      })
    )
  }

  const removeFromCartHandler = () => {
    dispatch(
      cartActions.removeItem({
        id: props.id,
        size: size,
        color: color,
      })
    )
  }

  const changeSizeHandler = (btnSize: string) => {
    dispatch(
      cartActions.changeSize({
        id: props.id,
        existingSize: size,
        newSize: btnSize,
        color: color,
      })
    )
  }

  const changeColorHandler = (btnColor: string) => {
    dispatch(
      cartActions.changeColor({
        id: props.id,
        existingColor: color,
        newColor: btnColor,
        size: size,
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
    <li className={classes.item}>
      <section className={classes.details}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.price}>{currencySign + price}</p>
        <div className={classes.size}>
          <p>Size:</p>
          {sizes.map((input, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  name={props.id}
                  id={input.size}
                  className={
                    size === input.size
                      ? `${classes["input--checked"]} cart-button`
                      : "cart-button"
                  }
                  onClick={() => changeSizeHandler(input.size)}
                />
                <p className={classes["size-p"]}>{input.size}</p>
              </div>
            )
          })}
        </div>
        <div className={classes.color}>
          <p>Color:</p>
          {colors.map((input, index) => {
            return (
              <input
                key={index}
                type="radio"
                name={props.name}
                id={input.color}
                className={
                  color === input.color
                    ? `${classes["input--checked"]} cart-button`
                    : "cart-button"
                }
                onClick={() => changeColorHandler(input.color)}
              />
            )
          })}
        </div>
      </section>
      <section className={classes["right-section"]}>
        <div className={classes.amount}>
          <button className="cart-button" onClick={addToCartHandler}>
            +
          </button>
          <p>{props.amount}</p>
          <button className="cart-button" onClick={removeFromCartHandler}>
            -
          </button>
        </div>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(
            "${props.imageUrl}"
          )`,
          }}
        />
      </section>
    </li>
  )
}

export default CartItem
