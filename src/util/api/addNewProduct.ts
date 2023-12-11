import { ProductFormData } from "../../types/form"

export const addNewProduct = async (productData: ProductFormData) => {
  const authToken = localStorage.getItem("authToken")

  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/products/add`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    )

    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
