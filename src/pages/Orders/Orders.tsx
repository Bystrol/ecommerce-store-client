import { Navigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import styles from "./Orders.module.css"
import useOrdersData from "../../hooks/orders/useOrdersData"
import { ClipLoader } from "react-spinners"
import OrderItem from "../../components/OrderItem/OrderItem"
import toast from "react-hot-toast"
import addOrder from "../../util/api/addOrder"
import { useAppDispatch } from "../../hooks/redux"
import { cartActions } from "../../store/cartSlice"
import { queryClient } from "../../providers/QueryProvider"

type Order = {
  _id: string
  currency: string
  products: [
    {
      _id: string
      productId: string
      name: string
      color: string
      imageUrl: string
      amount: number
      price: number
      size: string
    }
  ]
}

const Orders = () => {
  const { data: orders, isPending, isError, isSuccess } = useOrdersData()
  let [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const success = searchParams.get("success")
  const canceled = searchParams.get("canceled")
  const cart = localStorage.getItem("cart") || ""
  const currency = localStorage.getItem("currency") || ""

  useEffect(() => {
    const successHandler = async () => {
      toast.success("Thank you for your order!")
      await addOrder(JSON.parse(cart), currency)
      dispatch(cartActions.clearItems())
      queryClient.invalidateQueries({ queryKey: ["orders"] })
    }
    if (success) successHandler()
    if (canceled) toast.error("Your order was not completed! Try again.")
    setSearchParams([])
  }, [canceled, cart, dispatch, setSearchParams, success, currency])

  const isUserLoggedIn = localStorage.getItem("authToken") !== null

  if (!isUserLoggedIn) {
    return <Navigate to="/auth/login" />
  }

  let content

  if (isPending) content = <ClipLoader color="#000" size={30} />

  if (isError) content = <p>Failed to get orders</p>

  if (orders?.length === 0) {
    content = <h2>You don't have any orders</h2>
  }

  if (isSuccess && orders?.length !== 0)
    content = orders?.map((order: Order) => {
      return (
        <OrderItem
          key={order._id}
          id={order._id}
          products={order.products}
          currency={order.currency}
        />
      )
    })

  return (
    <section className={styles.container}>
      <h1>Your orders</h1>
      {content}
    </section>
  )
}

export default Orders
