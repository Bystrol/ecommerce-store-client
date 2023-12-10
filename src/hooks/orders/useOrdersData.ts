import { useQuery } from "@tanstack/react-query"
import { Order } from "../../types/order"

const useOrdersData = () => {
  const authToken = localStorage.getItem("authToken")

  const sortOrdersByDate = (orders: Order[]) => {
    return orders.sort(
      (objA, objB) => Number(objB.createdAt) - Number(objA.createdAt)
    )
  }

  const fetchOrders = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/orders/get`,
      {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      }
    )

    const data = await response.json()

    const updatedOrders = data.orders.map((order: Order) => {
      return {
        ...order,
        createdAt: new Date(order.createdAt),
      }
    })

    sortOrdersByDate(updatedOrders)

    return updatedOrders
  }

  return useQuery({
    queryFn: fetchOrders,
    queryKey: ["orders"],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
  })
}

export default useOrdersData
