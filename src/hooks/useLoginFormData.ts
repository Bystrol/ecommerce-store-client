import { useState } from "react"
import { LoginFormData } from "../types/form"
import { handleLoginInputEvent } from "../util/form/handleLoginInputEvent"

export const useLoginFormData = () => {
  const initialFormData: LoginFormData = {
    email: "",
    password: "",
    isInvalid: {
      email: false,
      password: false,
    },
    inputTouched: {
      email: false,
      password: false,
    },
    isFormValid: false,
  }

  const [formData, setFormData] = useState<LoginFormData>(initialFormData)

  const loginFormInputsData = [
    {
      name: "email",
      labelText: "E-mail",
      type: "email",
      isInvalid: formData.isInvalid.email,
      validationText: "E-mail must be valid e-mail adress",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleLoginInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleLoginInputEvent(e, setFormData),
    },
    {
      name: "password",
      labelText: "Password",
      type: "password",
      isInvalid: formData.isInvalid.password,
      validationText: "Password must consist of minimum 5 characters",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleLoginInputEvent(e, setFormData),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleLoginInputEvent(e, setFormData),
    },
  ]

  return {
    inputsData: loginFormInputsData,
    formData: formData,
  }
}
