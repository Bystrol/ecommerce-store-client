import { categoryActions } from "../../store/categorySlice"
import { detailActions } from "../../store/detailSlice"
import { cartActions } from "../../store/cartSlice"
import { AppDispatch } from "../../store"
import { CartItem, CategoryItem, DetailItem } from "../../types/product"

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

export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        "https://online-store-b05f3-default-rtdb.firebaseio.com/cart.json"
      )

      if (!response.ok) {
        throw new Error()
      }

      const data: CartItem[] = await response.json()

      dispatch(cartActions.fetchItems(data || []))
    } catch {
      alert("Could not load the cart!")
    }
  }
}
