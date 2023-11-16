import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store/index"
import { BrowserRouter } from "react-router-dom"
import ToastProvider from "./providers/ToastProvider"
import QueryProvider from "./providers/QueryProvider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <QueryProvider>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ToastProvider />
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </QueryProvider>
)
