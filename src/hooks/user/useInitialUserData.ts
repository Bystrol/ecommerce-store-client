import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux"
import { CartItem } from "../../types/product"
import { currencyActions } from "../../store/currencySlice"
import { cartActions } from "../../store/cartSlice"

let isInitial = true

export const useInitialUserData = () => {
  const items: CartItem[] = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()

  const checkIfSessionExpired = (session: string | null) => {
    const currentDateInMs = new Date().getTime()

    if (!session) {
      return
    }

    const sessionExpDate = JSON.parse(session).expires

    if (currentDateInMs > sessionExpDate) {
      localStorage.removeItem("cart")
      localStorage.removeItem("authToken")
    }
  }

  useEffect(() => {
    if (isInitial) {
      const currency = localStorage.getItem("currency")
      currency && dispatch(currencyActions.setCurrency(currency))

      checkIfSessionExpired(localStorage.getItem("session"))
      localStorage.setItem(
        "session",
        JSON.stringify({ expires: new Date().getTime() + 60 * 60 * 1000 })
      )

      const cart = localStorage.getItem("cart")
      cart && dispatch(cartActions.setItems(JSON.parse(cart)))

      isInitial = false
      return
    }

    localStorage.setItem("cart", JSON.stringify(items))
  }, [items, dispatch])
}
