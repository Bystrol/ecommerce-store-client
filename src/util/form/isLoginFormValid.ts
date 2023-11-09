import { LoginFormData } from "../../types/form"

export const isLoginFormValid = (formData: LoginFormData) => {
  if (
    formData.email &&
    formData.inputTouched.email &&
    !formData.isInvalid.email &&
    formData.password &&
    formData.inputTouched.password &&
    !formData.isInvalid.password
  ) {
    return true
  }
  return false
}
