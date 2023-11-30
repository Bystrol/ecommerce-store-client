import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ItemDetail from "./ItemDetail"
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

describe("ItemDetail component", () => {
  it("should show valid size and color after adding to the cart", () => {
    render(
      <Provider store={store}>
        <ItemDetail
          id="id"
          imageUrl="imageUrl"
          name="name"
          price={20}
          description="description"
        />
      </Provider>
    )

    const allInputs = screen.getAllByRole("radio")
    const sizeInput = screen.getByLabelText("m")
    const colorInput = allInputs.find((input) => input.id === "gray")
    const button = screen.getByRole("button")

    userEvent.click(sizeInput)
    colorInput && userEvent.click(colorInput)
    userEvent.click(button)

    render(
      <QueryProvider>
        <Provider store={store}>
          <BrowserRouter>
            <MiniCart onViewCart={jest.fn()} />
          </BrowserRouter>
        </Provider>
      </QueryProvider>
    )

    const updatedAllInputs = screen.getAllByRole("radio")
    const expectedSizeInput = updatedAllInputs.find(
      (input) => input.id === "m" && input.getAttribute("name") === "id"
    )
    const expectedColorInput = updatedAllInputs.find(
      (input) => input.id === "gray" && input.getAttribute("name") === "name"
    )

    expect(expectedSizeInput).toBeChecked()
    expect(expectedColorInput).toBeChecked()
  })
})
