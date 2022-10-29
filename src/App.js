import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faAngleDown,
  faShirt,
  faDollarSign,
  faEuroSign,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Category from "./pages/Category";
import Home from "../src/pages/Home";
import Detail from "./pages/Detail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData } from "./api/sendData";
import { fetchCartData } from "./api/getData";
import { currencyActions } from "./store/currencySlice";

library.add(
  faCartShopping,
  faAngleDown,
  faShirt,
  faDollarSign,
  faEuroSign,
  faSterlingSign
);

let isInitial = true;

function App() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());

    const currency = localStorage.getItem("currency");
    dispatch(currencyActions.setCurrency(currency));
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData(items);
  }, [items]);

  return (
    <Header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/cart" />
      </Routes>
    </Header>
  );
}

export default App;
