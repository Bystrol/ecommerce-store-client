export type FormData = {
  username: string
  email: string
  password: string
  confirmPassword: string
  isInvalid: {
    username: boolean
    email: boolean
    password: boolean
    confirmPassword: boolean
  }
  inputTouched: {
    [key: string]: boolean
    username: boolean
    email: boolean
    password: boolean
    confirmPassword: boolean
  }
  isFormValid: boolean
}

export type UpdatedInvalid = {
  [key: string]: boolean
  username: boolean
  email: boolean
  password: boolean
  confirmPassword: boolean
}
