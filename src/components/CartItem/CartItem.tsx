import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { cartActions } from "../../store/cartSlice"
import classes from "./CartItem.module.css"
import { CartItem as CartItemTypes } from "../../types/product"

type CartItemProps = CartItemTypes

const CartItem = (props: CartItemProps) => {
  const { size, color } = props

  const dispatch = useAppDispatch()
  const currency = useAppSelector((state) => state.currency.currency)

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
        price: props.price,
      })
    )
  }

  const changeSizeHandler = (btnSize: string) => {
    dispatch(
      cartActions.changeSize({
        id: props.id,
        key: props.id,
        name: props.name,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: 1,
        size: btnSize,
        color: color,
      })
    )
  }

  const changeColorHandler = (btnColor: string) => {
    dispatch(
      cartActions.changeColor({
        id: props.id,
        key: props.id,
        name: props.name,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: 1,
        size: size,
        color: btnColor,
      })
    )
  }

  const price =
    currency === "EUR"
      ? `€${(props.price * 1.025).toFixed(2)}`
      : currency === "GBP"
      ? `£${(props.price * 0.8985).toFixed(2)}`
      : `$${props.price}`

  return (
    <li className={classes.item}>
      <div className={classes.details}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.price}>{price}</p>
        <div className={classes.size}>
          <p>Size:</p>
          <div>
            <input
              type="radio"
              name={props.id}
              id="xs"
              onClick={() => {
                changeSizeHandler("xs")
              }}
              defaultChecked={size === "xs" ? true : false}
            ></input>
            <p className={classes["size-p"]}>xs</p>
          </div>
          <div>
            <input
              type="radio"
              name={props.id}
              id="s"
              onClick={() => {
                changeSizeHandler("s")
              }}
              defaultChecked={size === "s" ? true : false}
            ></input>
            <p className={classes["size-p"]}>s</p>
          </div>
          <div>
            <input
              type="radio"
              name={props.id}
              id="m"
              onClick={() => {
                changeSizeHandler("m")
              }}
              defaultChecked={size === "m" ? true : false}
            ></input>
            <p className={classes["size-p"]}>m</p>
          </div>
          <div>
            <input
              type="radio"
              name={props.id}
              id="l"
              onClick={() => {
                changeSizeHandler("l")
              }}
              defaultChecked={size === "l" ? true : false}
            ></input>
            <p className={classes["size-p"]}>l</p>
          </div>
        </div>
        <div className={classes.color}>
          <p>Color:</p>
          <input
            type="radio"
            name={props.name}
            defaultChecked={color === "brown" ? true : false}
            onClick={() => {
              changeColorHandler("brown")
            }}
          />
          <input
            type="radio"
            name={props.name}
            defaultChecked={color === "gray" ? true : false}
            onClick={() => {
              changeColorHandler("gray")
            }}
          />
          <input
            type="radio"
            name={props.name}
            defaultChecked={color === "black" ? true : false}
            onClick={() => {
              changeColorHandler("black")
            }}
          />
        </div>
      </div>
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
          backgroundSize: "200% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </li>
  )
}

export default CartItem
