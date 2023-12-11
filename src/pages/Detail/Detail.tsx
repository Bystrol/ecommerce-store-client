import { useParams, useNavigate } from "react-router"
import useProductsData from "../../hooks/products/useProductsData"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { Product } from "../../types/product"
import useExchangeRate from "../../hooks/exchange-rate/useExchangeRate"
import { useAppSelector } from "../../hooks/redux"
import { useEffect } from "react"

const Detail = () => {
  const itemId = useParams().id || ""
  const navigate = useNavigate()
  const currency = useAppSelector((state) => state.currency.currency)
  const { data } = useProductsData()
  const { data: rates } = useExchangeRate()

  useEffect(() => {
    if (
      data &&
      !data.products.find((product: Product) => product._id === itemId)
    ) {
      navigate("/404")
    }
  }, [data, itemId, navigate])

  const product = data?.products?.find(
    (product: Product) => product._id === itemId
  )

  return (
    product &&
    rates && (
      <ItemDetail
        key={product._id}
        id={product._id}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price * rates[currency]}
        description={product.description}
        type={product.type}
      />
    )
  )
}

export default Detail
