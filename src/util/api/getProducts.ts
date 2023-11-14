import { categoryActions } from "../../store/categorySlice"
import { detailActions } from "../../store/detailSlice"
import { AppDispatch } from "../../store"
import { CategoryItem, DetailItem } from "../../types/product"

export const fetchCategoryData = (category: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `https://online-store-b05f3-default-rtdb.firebaseio.com/${category}.json`
      )

      if (!response.ok) {
        throw new Error()
      }

      const data: CategoryItem[] = await response.json()

      dispatch(categoryActions.fetchData(data || []))
    } catch (error) {
      alert(
        "Could not fetch the data! Make sure that you've entered the API URL correctly."
      )
    }
  }
}

export const fetchDetailData = (category: string, id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `https://online-store-b05f3-default-rtdb.firebaseio.com/${category}.json`
      )

      if (!response.ok) {
        throw new Error()
      }

      const data: DetailItem[] = await response.json()

      const detailItem = data.filter((item) => item.id === id)

      dispatch(detailActions.setItem(detailItem))
    } catch (error) {
      alert(
        "Could not fetch the data! Make sure that you've entered the API URL correctly."
      )
    }
  }
}
