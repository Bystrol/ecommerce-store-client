import { useState } from "react"
import { RegisterFormData } from "../../types/form"
import { handleRegisterInputEvent } from "../../util/form/handleRegisterInputEvent"

export const useRegisterFormData = () => {
  const initialFormData: RegisterFormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isInvalid: {
      username: false,
      email: false,
      password: false,
      confirmPassword: false,
    },
    inputTouched: {
      username: false,
      email: false,
      password: false,
      confirmPassword: false,
    },
    isFormValid: false,
  }

  const [formData, setFormData] = useState<RegisterFormData>(initialFormData)

  const registerFormInputsData = [
    {
      name: "username",
      labelText: "Username",
      type: "text",
      isInvalid: formData.isInvalid.username,
      validationText: "Username must consist of minimum 3 characters",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleRegisterInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleRegisterInputEvent(e, setFormData),
    },
    {
      name: "email",
      labelText: "E-mail",
      type: "email",
      isInvalid: formData.isInvalid.email,
      validationText: "E-mail must be valid e-mail adress",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleRegisterInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleRegisterInputEvent(e, setFormData),
    },
    {
      name: "password",
      labelText: "Password",
      type: "password",
      isInvalid: formData.isInvalid.password,
      validationText: "Password must consist of minimum 5 characters",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleRegisterInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleRegisterInputEvent(e, setFormData),
    },
    {
      name: "confirmPassword",
      labelText: "Confirm password",
      type: "password",
      isInvalid: formData.isInvalid.confirmPassword,
      validationText: "Passwords must match",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleRegisterInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleRegisterInputEvent(e, setFormData),
    },
  ]

  return {
    inputsData: registerFormInputsData,
    formData: formData,
  }
}
