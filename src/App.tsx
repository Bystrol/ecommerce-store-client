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
import Category from "./pages/Category/Category"
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail"
import Cart from "./pages/Cart/Cart"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { sendCartData } from "./util/api/sendProducts"
import { fetchCartData } from "./util/api/getProducts"
import { currencyActions } from "./store/currencySlice"
import { CartItem } from "./types/product"
import Register from "./pages/Auth/Register/Register"
import Layout from "./components/Layout/Layout"

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
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </Layout>
  )
}

export default App
