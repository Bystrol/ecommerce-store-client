import { useParams } from "react-router"
import useProductsData from "../../hooks/products/useProductsData"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { Product } from "../../types/product"
import useExchangeRate from "../../hooks/exchange-rate/useExchangeRate"
import { useAppSelector } from "../../hooks/redux"

const Detail = () => {
  const itemId = useParams().id || ""
  const currency = useAppSelector((state) => state.currency.currency)
  const { data } = useProductsData()
  const { data: rates } = useExchangeRate()

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
      />
    )
  )
}

export default Detail
