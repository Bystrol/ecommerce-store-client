import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faCartShopping,
  faAngleDown,
  faShirt,
  faDollarSign,
  faEuroSign,
  faSterlingSign,
  faBars,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"
import { Route, Routes, Navigate } from "react-router-dom"
import Category from "./pages/Category/Category"
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail"
import Cart from "./pages/Cart/Cart"
import Register from "./pages/Auth/Register/Register"
import Layout from "./components/Layout/Layout"
import Login from "./pages/Auth/Login/Login"
import AddProduct from "./pages/Admin/AddProduct"
import { useInitialUserData } from "./hooks/user/useInitialUserData"

library.add(
  faCartShopping,
  faAngleDown,
  faShirt,
  faDollarSign,
  faEuroSign,
  faSterlingSign,
  faBars,
  faUser,
  faRightFromBracket
)

function App() {
  useInitialUserData()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:id" element={<Detail />} />
      </Routes>
    </Layout>
  )
}

export default App
