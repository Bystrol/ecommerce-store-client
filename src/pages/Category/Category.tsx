import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useEffect } from "react"
import { useParams } from "react-router"
import ClothItem from "../../components/ClothItem/ClothItem"
import classes from "./Category.module.css"
import { fetchCategoryData } from "../../api/getData"
import { detailActions } from "../../store/detailSlice"

const Category = () => {
  const items = useAppSelector((state) => state.category.items)
  const category = useParams().category || ""

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategoryData(category))
    dispatch(detailActions.clearArray())
  }, [category, dispatch])

  return (
    <div className={classes.body}>
      <p>{category.charAt(0).toUpperCase() + category.slice(1)} category</p>
      <div className={classes.items}>
        {items.map((item) => {
          return (
            <ClothItem
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              isAvailable={item.isAvailable}
              description={item.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Category
