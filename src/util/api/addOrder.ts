import { CartItem } from "../../types/product"

export const addOrder = async (cart: CartItem[], currency: string) => {
  const authToken = localStorage.getItem("authToken")

  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/orders/add`,
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: cart,
          currency,
        }),
      }
    )

    const data = await response.json()

    return {
      data,
    }
  } catch (error) {
    console.log(error)
  }
}

export default addOrder
