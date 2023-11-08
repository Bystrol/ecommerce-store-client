import { useState } from "react"
import { FormData } from "../types/form"
import { handleInputEvent } from "../util/form/handleInputEvent"

export const useRegisterFormData = () => {
  const initialFormData: FormData = {
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

  const [formData, setFormData] = useState<FormData>(initialFormData)

  const registerFormInputsData = [
    {
      name: "username",
      labelText: "Username",
      type: "text",
      isInvalid: formData.isInvalid.username,
      validationText: "Username must consist of minimum 3 characters",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleInputEvent(e, setFormData),
    },
    {
      name: "email",
      labelText: "E-mail",
      type: "email",
      isInvalid: formData.isInvalid.email,
      validationText: "E-mail must be valid e-mail adress",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleInputEvent(e, setFormData),
    },
    {
      name: "password",
      labelText: "Password",
      type: "password",
      isInvalid: formData.isInvalid.password,
      validationText: "Password must consist of minimum 5 characters",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleInputEvent(e, setFormData),
    },
    {
      name: "confirmPassword",
      labelText: "Confirm password",
      type: "password",
      isInvalid: formData.isInvalid.confirmPassword,
      validationText: "Passwords must match",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleInputEvent(e, setFormData),
    },
  ]

  return {
    inputsData: registerFormInputsData,
    formData: formData,
  }
}
