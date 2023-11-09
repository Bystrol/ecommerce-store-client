import { RegisterFormData, UpdatedRegisterInvalid } from "../../types/form"
import { isRegisterFormValid } from "./isRegisterFormValid"
import { validateInput } from "./validateInput"

export const handleRegisterInputEvent = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<RegisterFormData>>
) => {
  const { id, value } = event.target

  setFormData((prevFormData) => {
    const updatedInvalid: UpdatedRegisterInvalid = {
      username: prevFormData.isInvalid.username,
      email: prevFormData.isInvalid.email,
      password: prevFormData.isInvalid.password,
      confirmPassword: prevFormData.isInvalid.confirmPassword,
    }

    if (event.type === "change") {
      if (id === "confirmPassword") {
        const isNotMatching = value !== prevFormData.password
        const isTouched = prevFormData.inputTouched.confirmPassword
        updatedInvalid.confirmPassword = isNotMatching && isTouched
      } else {
        updatedInvalid[id] =
          !validateInput(id, value) && prevFormData.inputTouched[id]
      }
    } else if (event.type === "blur") {
      if (id === "confirmPassword") {
        updatedInvalid.confirmPassword = value !== prevFormData.password
      } else {
        updatedInvalid[id] = !validateInput(id, value)
      }
    }

    const isFormValid = isRegisterFormValid({
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
