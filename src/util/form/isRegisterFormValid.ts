import { FormData } from "../../types/form"

export const isRegisterFormValid = (formData: FormData) => {
  if (
    formData.username &&
    formData.inputTouched.username &&
    !formData.isInvalid.username &&
    formData.email &&
    formData.inputTouched.email &&
    !formData.isInvalid.email &&
    formData.password &&
    formData.inputTouched.password &&
    !formData.isInvalid.password &&
    formData.confirmPassword &&
    formData.inputTouched.confirmPassword &&
    !formData.isInvalid.confirmPassword
  ) {
    return true
  }
  return false
}
