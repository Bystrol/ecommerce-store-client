import { useState, useEffect } from "react"

export const useUserRole = () => {
  const [isUserAdmin, setIsUserAdmin] = useState<boolean>(false)

  const authToken = localStorage.getItem("authToken")

  useEffect(() => {
    const checkUserRole = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/check-role`,
        {
          headers: {
            Authorization: "Bearer " + authToken,
          },
        }
      )

      if (response.status === 200) {
        setIsUserAdmin(true)
      }
    }

    authToken && checkUserRole()
  }, [authToken])

  return {
    isUserAdmin,
  }
}
