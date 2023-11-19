import classes from "./Home.module.css"
import { useEffect } from "react"
import toast from "react-hot-toast"
import { useSearchParams } from "react-router-dom"

const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get("success")
  const canceled = searchParams.get("canceled")

  useEffect(() => {
    if (success) {
      toast.success("Thank you for your order!")
      localStorage.removeItem("cart")
    }
    if (canceled) toast.error("Your order was not completed! Try again.")
    setSearchParams([])
  }, [success, canceled, setSearchParams])

  return (
    <div className={classes.body}>
      <p>Your favourite online clothing shop.</p>
      <div className={classes.layer} />
      <div className={classes.background} />
    </div>
  )
}

export default Home
