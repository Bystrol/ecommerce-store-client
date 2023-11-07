import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faCartShopping,
  faAngleDown,
  faShirt,
  faDollarSign,
  faEuroSign,
  faSterlingSign,
  faBars,
} from "@fortawesome/free-solid-svg-icons"
import { Route, Routes, Navigate } from "react-router-dom"
import Header from "./components/Header/Header"
import Category from "./pages/Category/Category"
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail"
import Cart from "./pages/Cart/Cart"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { sendCartData } from "./api/sendData"
import { fetchCartData } from "./api/getData"
import { currencyActions } from "./store/currencySlice"
import { CartItem } from "./types/product"

library.add(
  faCartShopping,
  faAngleDown,
  faShirt,
  faDollarSign,
  faEuroSign,
  faSterlingSign,
  faBars
)

let isInitial = true

function App() {
  const items: CartItem[] = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCartData())

    const currency = localStorage.getItem("currency")
    dispatch(currencyActions.setCurrency(currency))
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    sendCartData(items)
  }, [items])

  return (
    <Header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Header>
  )
}

export default App
