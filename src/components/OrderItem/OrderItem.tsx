import useExchangeRate from "../../hooks/exchange-rate/useExchangeRate"
import styles from "./OrderItem.module.css"

type OrderItemProps = {
  id: string
  currency: string
  products: [
    {
      _id: string
      name: string
      color: string
      imageUrl: string
      amount: number
      price: number
      size: string
    }
  ]
}

const OrderItem = (props: OrderItemProps) => {
  const { data: rates } = useExchangeRate()

  const currency =
    props.currency === "USD" ? "$" : props.currency === "EUR" ? "€" : "£"

  let updatedProducts = [...props.products]

  if (props.currency !== "USD" && rates) {
    updatedProducts = props.products.map((product) => ({
      ...product,
      price: +(product.price * rates[props.currency]).toFixed(2),
    }))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.container__heading}>Order #{props.id}</h2>
      {updatedProducts.map((product) => {
        return (
          <div key={product._id} className={styles.container__info}>
            <div className={styles.container__properties}>
              <h3>{product.name}</h3>
              <p>color: {product.color}</p>
              <p>amount: {product.amount}</p>
              <p>price: {product.price + currency}</p>
              <p>size: {product.size}</p>
            </div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={styles.container__image}
            />
          </div>
        )
      })}
    </div>
  )
}

export default OrderItem
