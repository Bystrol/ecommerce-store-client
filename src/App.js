import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faAngleDown,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";

library.add(faCartShopping, faAngleDown, faShirt);

function App() {
  return <Header />;
}

export default App;
