import toast from "react-hot-toast"

type LoginParams = {
  email: string
  password: string
}

export const login = async (params: LoginParams) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })

  const data: { message: string; authToken: string; userRole: string } =
    await response.json()

  if (response.status !== 200) {
    toast.error(data.message)
  }

  return {
    message: data.message,
    authToken: data.authToken,
    status: response.status,
  }
}
