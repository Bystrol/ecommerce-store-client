import classes from "./ItemDetail.module.css"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { cartActions } from "../../store/cartSlice"
import { useState } from "react"
import { clothSizes, colors, shoeSizes } from "../../constants/products"

type ItemDetailProps = {
  id: string
  imageUrl: string
  name: string
  price: number
  description: string
  type: string
}

const ItemDetail = (props: ItemDetailProps) => {
  const sizes = props.type === "cloth" ? clothSizes : shoeSizes

  const [size, setSize] = useState<string>(sizes[0].size)
  const [color, setColor] = useState<string>("brown")

  const currencySign = useAppSelector((state) => state.currency.sign)
  const dispatch = useAppDispatch()

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
        type: props.type,
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
            {sizes.map((input, index) => {
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
            {colors.map((input, index) => {
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
