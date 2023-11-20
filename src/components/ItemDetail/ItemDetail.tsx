import classes from "./ItemDetail.module.css"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { cartActions } from "../../store/cartSlice"
import { useState } from "react"

type ItemDetailProps = {
  key: string
  id: string
  imageUrl: string
  name: string
  price: number
  description: string
}

const ItemDetail = (props: ItemDetailProps) => {
  const [size, setSize] = useState<string>("xs")
  const [color, setColor] = useState<string>("brown")

  const currencySign = useAppSelector((state) => state.currency.sign)
  const dispatch = useAppDispatch()

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        key: props.id,
        name: props.name,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: 1,
        size: size,
        color: color,
      })
    )
  }

  return (
    <div className={classes.main}>
      <div className={classes.body}>
        <div className={classes.images}>
          <div className={classes.leftSection}>
            <div className={classes.image}>
              <img src={props.imageUrl} alt={props.name} />
            </div>
            <div className={classes.image}>
              <img src={props.imageUrl} alt={props.name} />
            </div>
            <div className={classes.image}>
              <img src={props.imageUrl} alt={props.name} />
            </div>
          </div>
          <div className={classes.centerSection}>
            <img src={props.imageUrl} alt={props.name} />
          </div>
        </div>
        <div className={classes.rightSection}>
          <h1 className={classes.name}>{props.name}</h1>
          <div className={classes.size}>
            <p>size:</p>
            <div>
              <input
                type="radio"
                name="size"
                id="xs"
                defaultChecked
                onClick={() => {
                  setSize("xs")
                }}
              ></input>
              <label htmlFor="xs">xs</label>
            </div>
            <div>
              <input
                type="radio"
                name="size"
                id="s"
                onClick={() => {
                  setSize("s")
                }}
              ></input>
              <label htmlFor="s">s</label>
            </div>
            <div>
              <input
                type="radio"
                name="size"
                id="m"
                onClick={() => {
                  setSize("m")
                }}
              ></input>
              <label htmlFor="m">m</label>
            </div>
            <div>
              <input
                type="radio"
                name="size"
                id="l"
                onClick={() => {
                  setSize("l")
                }}
              ></input>
              <label htmlFor="l">l</label>
            </div>
          </div>
          <div className={classes.color}>
            <p>color:</p>
            <input
              type="radio"
              name="color"
              defaultChecked
              onClick={() => {
                setColor("brown")
              }}
            />
            <input
              type="radio"
              name="color"
              onClick={() => {
                setColor("gray")
              }}
            />
            <input
              type="radio"
              name="color"
              onClick={() => {
                setColor("black")
              }}
            />
          </div>
          <div className={classes.price}>
            <p>price:</p>
            {currencySign + props.price.toFixed(2)}
          </div>
          <button onClick={addToCartHandler}>add to cart</button>
          <p className={classes.description}>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
