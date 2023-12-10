import { useEffect, useRef, useState } from "react"

const useDropdownVisibility = () => {
  const [showNav, setShowNav] = useState<boolean>(false)
  const [showCurrencyList, setShowCurrencyList] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)

  const navRef = useRef<HTMLDivElement>(null)
  const currencyListRef = useRef<HTMLDivElement>(null)
  const cartRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleDropdownClose = (e: MouseEvent) => {
      const targetElement = e.target as Element

      if (
        currencyListRef.current &&
        !currencyListRef.current.contains(targetElement) &&
        !targetElement.classList.contains("Header_list__Ucifz")
      ) {
        setShowCurrencyList(false)
      }

      if (
        navRef.current &&
        !navRef.current.contains(targetElement) &&
        !targetElement.classList.contains("Navigation_navigation__xIjqU")
      ) {
        setShowNav(false)
      }

      if (
        cartRef.current &&
        !cartRef.current.contains(targetElement) &&
        !targetElement.closest(".MiniCart_cart__gK8D5") &&
        !targetElement.classList.contains("cart-button")
      ) {
        setShowCart(false)
      }
    }

    document.addEventListener("click", handleDropdownClose)

    return () => {
      document.removeEventListener("click", handleDropdownClose)
    }
  }, [])

  return {
    showNav,
    setShowNav,
    showCurrencyList,
    setShowCurrencyList,
    showCart,
    setShowCart,
    navRef,
    currencyListRef,
    cartRef,
  }
}

export default useDropdownVisibility
