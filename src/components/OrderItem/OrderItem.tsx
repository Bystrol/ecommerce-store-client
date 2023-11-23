import styles from "./OrderItem.module.css"

type OrderItemProps = {
  id: string
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
  return (
    <div className={styles.container}>
      <h2>Order #{props.id}</h2>
      {props.products.map((product) => {
        return (
          <div key={product._id} className={styles.container__info}>
            <div className={styles.container__properties}>
              <h3>{product.name}</h3>
              <p>color: {product.color}</p>
              <p>amount: {product.amount}</p>
              <p>price: {product.price}</p>
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
