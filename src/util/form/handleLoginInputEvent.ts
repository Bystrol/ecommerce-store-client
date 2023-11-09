import { LoginFormData, UpdatedLoginInvalid } from "../../types/form"
import { isLoginFormValid } from "./isLoginFormValid"
import { validateInput } from "./validateInput"

export const handleLoginInputEvent = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<LoginFormData>>
) => {
  const { id, value } = event.target

  setFormData((prevFormData) => {
    const updatedInvalid: UpdatedLoginInvalid = {
      email: prevFormData.isInvalid.email,
      password: prevFormData.isInvalid.password,
    }

    if (event.type === "change") {
      updatedInvalid[id] =
        !validateInput(id, value) && prevFormData.inputTouched[id]
    } else if (event.type === "blur") {
      updatedInvalid[id] = !validateInput(id, value)
    }

    const isFormValid = isLoginFormValid({
      ...prevFormData,
      [id]: value,
      inputTouched: {
        ...prevFormData.inputTouched,
        [id]: event.type === "blur" ? true : prevFormData.inputTouched[id],
      },
      isInvalid: updatedInvalid,
    })

    return {
      ...prevFormData,
      [id]: value,
      inputTouched: {
        ...prevFormData.inputTouched,
        [id]: event.type === "blur" ? true : prevFormData.inputTouched[id],
      },
      isInvalid: updatedInvalid,
      isFormValid: isFormValid,
    }
  })
}
