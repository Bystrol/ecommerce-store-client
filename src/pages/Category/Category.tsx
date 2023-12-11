import { useParams, useNavigate } from "react-router"
import { ClipLoader } from "react-spinners"
import ClothItem from "../../components/ClothItem/ClothItem"
import classes from "./Category.module.css"
import useProductsData from "../../hooks/products/useProductsData"
import { Product } from "../../types/product"
import useExchangeRate from "../../hooks/exchange-rate/useExchangeRate"
import { useEffect } from "react"
import { categories } from "../../constants/categories"

const Category = () => {
  const category = useParams().category || ""
  const navigate = useNavigate()
  const { data, isPending, isError, isSuccess } = useProductsData()
  const { data: rates } = useExchangeRate()

  useEffect(() => {
    if (!categories.includes(category)) {
      navigate("/404")
    }
  }, [category, navigate])

  let content

  if (isPending) content = <ClipLoader color="#000" size={30} />

  if (isError) content = <p>Failed to get products</p>

  if (isSuccess && rates)
    content = data?.products.map((item: Product) => {
      return (
        <ClothItem
          key={item._id}
          id={item._id}
          imageUrl={item.imageUrl}
          name={item.name}
          price={item.price}
          isAvailable={item.isAvailable}
          description={item.description}
          type={item.type}
        />
      )
    })

  return (
    <div className={classes.body}>
      <p>{category.charAt(0).toUpperCase() + category.slice(1)} category</p>
      <div className={classes.items}>{content}</div>
    </div>
  )
}

export default Category
