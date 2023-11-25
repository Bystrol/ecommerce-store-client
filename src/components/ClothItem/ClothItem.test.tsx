import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ClothItem from "./ClothItem"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../../store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import MiniCart from "../MiniCart/MiniCart"

export const queryClient = new QueryClient()

const QueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe("ClothItem component", () => {
  it("should add new item to the cart when user clicks cart button", async () => {
    render(
      <QueryProvider>
        <Provider store={store}>
          <BrowserRouter>
            <ClothItem
              description="description"
              id="id"
              imageUrl="imageUrl"
              isAvailable
              name="name"
              price={20}
            />
          </BrowserRouter>
        </Provider>
      </QueryProvider>
    )

    const button = screen.getByRole("button")

    userEvent.click(button)

    render(
      <QueryProvider>
        <Provider store={store}>
          <BrowserRouter>
            <MiniCart onCheckout={jest.fn()} onViewCart={jest.fn()} />
          </BrowserRouter>
        </Provider>
      </QueryProvider>
    )

    expect(screen.getByRole("listitem")).toBeInTheDocument()
  })
})
