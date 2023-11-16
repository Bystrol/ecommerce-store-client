import { useParams } from "react-router"
import useProductsData from "../../hooks/products/useProductsData"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { Product } from "../../types/product"

const Detail = () => {
  const itemId = useParams().id || ""
  const { data } = useProductsData()

  const product = data.products.find(
    (product: Product) => product._id === itemId
  )

  return (
    <ItemDetail
      key={product._id}
      id={product._id}
      imageUrl={product.imageUrl}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  )
}

export default Detail
