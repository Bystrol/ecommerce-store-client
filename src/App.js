import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faAngleDown,
  faShirt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Category from "./pages/Category";
import Home from "../src/pages/Home";
import Detail from "./pages/Detail";

library.add(faCartShopping, faAngleDown, faShirt, faDollarSign);

function App() {
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
