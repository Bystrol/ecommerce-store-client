import { useEffect } from "react"

type DropdownCloseParams = {
  currencyListRef: React.RefObject<HTMLDivElement>
  navRef: React.RefObject<HTMLDivElement>
  cartRef: React.RefObject<SVGSVGElement>
  setShowCurrencyList: React.Dispatch<React.SetStateAction<boolean>>
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

const useDropdownClose = ({
  currencyListRef,
  navRef,
  cartRef,
  setShowCurrencyList,
  setShowNav,
  setShowCart,
}: DropdownCloseParams) => {
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
        !targetElement.closest(".MiniCart_empty__G3vPK")
      ) {
        setShowCart(false)
      }
    }

    document.addEventListener("click", handleDropdownClose)

    return () => {
      document.removeEventListener("click", handleDropdownClose)
    }
  }, [
    cartRef,
    currencyListRef,
    navRef,
    setShowCart,
    setShowCurrencyList,
    setShowNav,
  ])
}

export default useDropdownClose
