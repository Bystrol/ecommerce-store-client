import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const useProductsData = () => {
  const category = useParams().category || ""

  const fetchProductsData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/products/get/${category}`
    )
    return response.json()
  }

  return useQuery({
    queryKey: ["products", category],
    queryFn: fetchProductsData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
  })
}

export default useProductsData
