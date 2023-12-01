import classes from "./ItemDetail.module.css"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { cartActions } from "../../store/cartSlice"
import { useState } from "react"
import { sizeInputs, colorInputs } from "../../constants/inputs"

type ItemDetailProps = {
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

  const arrayOfThreeElements = new Array(3).fill(null)

  return (
    <div className={classes.main}>
      <div className={classes.body}>
        <div className={classes.images}>
          <div className={classes.leftSection}>
            {arrayOfThreeElements.map((element, index) => {
              return (
                <div key={index} className={classes.image}>
                  <img src={props.imageUrl} alt={props.name} />
                </div>
              )
            })}
          </div>
          <div className={classes.centerSection}>
            <img src={props.imageUrl} alt={props.name} />
          </div>
        </div>
        <div className={classes.rightSection}>
          <h1 className={classes.name}>{props.name}</h1>
          <div className={classes.size}>
            <p>size:</p>
            {sizeInputs.map((input, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="size"
                    id={input.size}
                    defaultChecked={input.size === size}
                    onClick={() => setSize(input.size)}
                  />
                  <label htmlFor={input.size}>{input.size}</label>
                </div>
              )
            })}
          </div>
          <div className={classes.color}>
            <p>color:</p>
            {colorInputs.map((input, index) => {
              return (
                <input
                  key={index}
                  type="radio"
                  name="color"
                  id={input.color}
                  defaultChecked={input.color === color}
                  onClick={() => setColor(input.color)}
                />
              )
            })}
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
