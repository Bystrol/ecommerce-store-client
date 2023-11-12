import { useState, ChangeEvent } from "react"

type ProductFormData = {
  [key: string]: string
  name: string
  description: string
  imageUrl: string
  price: string
  isAvailable: string
  category: string
}

const initialProductFormData: ProductFormData = {
  name: "",
  description: "",
  imageUrl: "",
  price: "",
  isAvailable: "",
  category: "",
}

export const useAddProductFormData = () => {
  const [productFormData, setProductFormData] = useState<ProductFormData>(
    initialProductFormData
  )

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

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
