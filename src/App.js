import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faAngleDown,
  faShirt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import WomenCategory from "../src/pages/WomenCategory";
import Home from "../src/pages/Home";

library.add(faCartShopping, faAngleDown, faShirt, faDollarSign);

function App() {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/women" element={<WomenCategory />} />
        <Route path="/women/:id" />
        <Route path="/men" />
        <Route path="/men/:id" />
        <Route path="/kids" />
        <Route path="/kids/:id" />
        <Route path="/cart" />
      </Routes>
    </Header>
  );
}

export default App;
