import { FormEvent, ChangeEvent } from "react"
import styles from "./AddProduct.module.css"
import { useAddProductFormData } from "../../hooks/form/useAddProductFormData"
import FormInput from "../../components/UI/FormInput"
import { addNewProduct } from "../../util/api/addNewProduct"
import { useUserRole } from "../../hooks/user/useUserRole"
import { categories } from "../../constants/categories"

const AddProduct = () => {
  const { productFormData, setProductFormData, addProductFormInputsData } =
    useAddProductFormData()
  const { isUserAdmin } = useUserRole()

  const setCategoryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setProductFormData((prevProductFormData) => {
      return { ...prevProductFormData, category: e.target.value }
    })
  }

  const setTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setProductFormData((prevProductFormData) => {
      return { ...prevProductFormData, type: e.target.value }
    })
  }

  const addProductHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNewProduct(productFormData)
  }

  if (!isUserAdmin) {
    return (
      <h1 className={styles.heading}>
        You are not allowed to access this page
      </h1>
    )
  }

  const productTypes = ["cloth", "shoe"]

  return (
    <div className={styles.container}>
      <form onSubmit={addProductHandler} className={styles.form}>
        {addProductFormInputsData.map((input) => {
          return (
            <FormInput
              key={input.name}
              name={input.name}
              labelText={input.labelText}
              type={input.type}
              onChange={input.onChange}
              value={input.value}
            />
          )
        })}
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          onChange={setCategoryHandler}
          defaultValue=""
        >
          <option value="" disabled>
            -- choose category --
          </option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            )
          })}
        </select>
        <select name="type" id="type" onChange={setTypeHandler} defaultValue="">
          <option value="" disabled>
            -- choose type --
          </option>
          {productTypes.map((type, index) => {
            return (
              <option key={index} value={type}>
                {type}
              </option>
            )
          })}
        </select>
        <button className={styles.form__button}>Add</button>
      </form>
    </div>
  )
}

export default AddProduct
