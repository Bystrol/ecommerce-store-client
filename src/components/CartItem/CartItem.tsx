import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { cartActions } from "../../store/cartSlice"
import classes from "./CartItem.module.css"
import { CartItem as CartItemTypes } from "../../types/product"
import useExchangeRate from "../../hooks/exchange-rate/useExchangeRate"
import { sizeInputs, colorInputs } from "../../constants/inputs"

type CartItemProps = CartItemTypes

const CartItem = (props: CartItemProps) => {
  const { size, color } = props

  const dispatch = useAppDispatch()
  const currency = useAppSelector((state) => state.currency.currency)
  const currencySign = useAppSelector((state) => state.currency.sign)
  const { data: rates } = useExchangeRate()

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        key: props.id,
        name: props.name,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: 1,
      })
    )
  }

  const removeFromCartHandler = () => {
    dispatch(
      cartActions.removeItem({
        id: props.id,
      })
    )
  }

  const changeSizeHandler = (btnSize: string) => {
    dispatch(
      cartActions.changeSize({
        id: props.id,
        size: btnSize,
      })
    )
  }

  const changeColorHandler = (btnColor: string) => {
    dispatch(
      cartActions.changeColor({
        id: props.id,
        color: btnColor,
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
          {sizeInputs.map((input) => {
            return (
              <div key={input.size}>
                <input
                  type="radio"
                  name={props.id}
                  id={input.size}
                  onClick={() => changeSizeHandler(input.size)}
                  defaultChecked={size === input.size}
                />
                <p className={classes["size-p"]}>{input.size}</p>
              </div>
            )
          })}
        </div>
        <div className={classes.color}>
          <p>Color:</p>
          {colorInputs.map((input) => {
            return (
              <input
                key={input.color}
                type="radio"
                name={props.name}
                id={input.color}
                defaultChecked={color === input.color}
                onClick={() => changeColorHandler(input.color)}
              />
            )
          })}
        </div>
      </section>
      <section className={classes["right-section"]}>
        <div className={classes.amount}>
          <button onClick={addToCartHandler}>+</button>
          <p>{props.amount}</p>
          <button onClick={removeFromCartHandler}>-</button>
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
