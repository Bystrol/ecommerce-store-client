import toast from "react-hot-toast"
import { CartItem } from "../../types/product"

type CheckoutParams = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  currency: string
  items: CartItem[]
}

const checkout = async ({ setIsLoading, currency, items }: CheckoutParams) => {
  setIsLoading(true)

  const authToken = localStorage.getItem("authToken")

  if (!authToken) {
    window.location.href = `${process.env.REACT_APP_CLIENT_URL}/auth/login`
    return
  }

  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/checkout/create-checkout-session`,
      {
        method: "POST",
        body: JSON.stringify({ currency, items }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      }
    )

    if (response.status === 401) {
      localStorage.removeItem("authToken")
      window.location.href = `${process.env.REACT_APP_CLIENT_URL}/auth/login`
      throw new Error("User not authenticated")
    }

    const data = await response.json()

    window.location.href = data.url
  } catch (error) {
    toast.error(Object(error).message)
  } finally {
    setIsLoading(false)
  }
}

export default checkout
