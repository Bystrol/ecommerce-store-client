export type LoginFormData = {
  email: string
  password: string
  isInvalid: {
    email: boolean
    password: boolean
  }
  inputTouched: {
    [key: string]: boolean
    email: boolean
    password: boolean
  }
  isFormValid: boolean
}

export type RegisterFormData = LoginFormData & {
  username: string
  confirmPassword: string
  isInvalid: {
    username: boolean
    confirmPassword: boolean
  }
  inputTouched: {
    username: boolean
    confirmPassword: boolean
  }
}

export type UpdatedLoginInvalid = {
  [key: string]: boolean
  email: boolean
  password: boolean
}

export type UpdatedRegisterInvalid = UpdatedLoginInvalid & {
  username: boolean
  confirmPassword: boolean
}

export type ProductFormData = {
  [key: string]: string | boolean
  name: string
  description: string
  imageUrl: string
  price: string
  isAvailable: boolean
  category: string
  type: string
}
