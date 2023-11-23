import { useQuery } from "@tanstack/react-query"

const useOrdersData = () => {
  const authToken = localStorage.getItem("authToken")

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

    return data.orders
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
