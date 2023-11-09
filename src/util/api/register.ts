import toast from "react-hot-toast"

type RegisterParams = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export const register = async (params: RegisterParams) => {
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

  const data: { message: string } = await response.json()

  if (response.status === 201) {
    toast.success(data.message)
  } else {
    toast.error(data.message)
  }

  return {
    message: data.message,
    status: response.status,
  }
}
