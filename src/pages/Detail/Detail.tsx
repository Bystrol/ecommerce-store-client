import { fetchDetailData } from "../../api/getData"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useParams } from "react-router"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { categoryActions } from "../../store/categorySlice"

const Detail = () => {
  const itemId = useParams().id || ""
  const category = useParams().category || ""

  const clickedItem = useAppSelector((state) => state.detail.item)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDetailData(category, itemId))
    dispatch(categoryActions.clearArray())
  }, [category, dispatch, itemId])

  return (
    <>
      {clickedItem.map((item) => {
        return (
          <ItemDetail
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        )
      })}
    </>
  )
}

export default Detail
