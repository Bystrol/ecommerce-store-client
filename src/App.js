import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";

library.add(faCartShopping, faAngleDown);

function App() {
  return <Header />;
}

export default App;
