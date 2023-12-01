import { useUserRole } from "../user/useUserRole"

const useNavigationLinks = () => {
  const { isUserAdmin } = useUserRole()

  const navLinks: {
    categoryName: string
    path: string
    canBeAccessed: boolean
  }[] = [
    {
      categoryName: "women",
      path: "/category/women",
      canBeAccessed: true,
    },
    {
      categoryName: "men",
      path: "/category/men",
      canBeAccessed: true,
    },
    {
      categoryName: "kids",
      path: "/category/kids",
      canBeAccessed: true,
    },
    {
      categoryName: "add product",
      path: "/admin/add-product",
      canBeAccessed: isUserAdmin,
    },
  ]

  return navLinks
}

export default useNavigationLinks
