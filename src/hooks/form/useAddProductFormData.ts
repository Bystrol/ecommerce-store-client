import { useState, ChangeEvent } from "react"
import { ProductFormData } from "../../types/form"

const initialProductFormData: ProductFormData = {
  name: "",
  description: "",
  imageUrl: "",
  price: "",
  isAvailable: false,
  category: "",
  type: "",
}

export const useAddProductFormData = () => {
  const [productFormData, setProductFormData] = useState<ProductFormData>(
    initialProductFormData
  )

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    if (id === "isAvailable") {
      setProductFormData((prevProductFormData) => {
        return {
          ...prevProductFormData,
          isAvailable: e.target.checked,
        }
      })

      return
    }

    setProductFormData((prevProductFormData) => {
      return {
        ...prevProductFormData,
        [id]: value,
      }
    })
  }

  const addProductFormInputsData = [
    {
      name: "name",
      labelText: "Name",
      type: "text",
      onChange: (e: ChangeEvent<HTMLInputElement>) => inputChangeHandler(e),
    },
    {
      name: "description",
      labelText: "Description",
      type: "text",
      onChange: (e: ChangeEvent<HTMLInputElement>) => inputChangeHandler(e),
    },
    {
      name: "imageUrl",
      labelText: "Image URL",
      type: "url",
      onChange: (e: ChangeEvent<HTMLInputElement>) => inputChangeHandler(e),
    },
    {
      name: "price",
      labelText: "Price",
      type: "text",
      onChange: (e: ChangeEvent<HTMLInputElement>) => inputChangeHandler(e),
    },
    {
      name: "isAvailable",
      labelText: "Is available?",
      type: "checkbox",
      onChange: (e: ChangeEvent<HTMLInputElement>) => inputChangeHandler(e),
      value: "true",
    },
  ]

  return {
    productFormData,
    setProductFormData,
    addProductFormInputsData,
  }
}
