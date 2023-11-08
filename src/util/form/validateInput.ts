export const validateInput = (id: string, value: string) => {
  if (id === "username") {
    return value.length >= 3
  }
  if (id === "email") {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
  }
  if (id === "password") {
    return value.length >= 5
  }
}
