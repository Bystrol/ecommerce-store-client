type RegisterParams = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export const register = async (params: RegisterParams) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    )

    const data: { message: string; authToken: string } = await response.json()

    return data
  } catch (err) {
    console.log(err)
  }
}
