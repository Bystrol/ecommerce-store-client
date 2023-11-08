import { CartItem } from "../../types/product"

export const sendCartData = async (items: CartItem[]) => {
  try {
    const response = await fetch(
      "https://online-store-b05f3-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(items),
        headers: { "Content-Type": "application/json" },
      }
    )

    if (!response.ok) {
      throw new Error()
    }
  } catch {
    alert("Could not add item to the cart!")
  }
}
