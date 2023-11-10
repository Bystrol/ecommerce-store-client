export const isUserAuthenticated = async () => {
  const authToken = localStorage.getItem("authToken")

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/check-auth`,
    {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    }
  )

  if (response.status === 401) {
    localStorage.removeItem("authToken")
    window.location.href = "http://localhost:3000/auth/login"
    return false
  } else if (response.status === 200) {
    return true
  }
}
