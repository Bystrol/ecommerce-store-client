import classes from "./Navigation.module.css"
import { NavLink } from "react-router-dom"

type NavigationProps = {
  show: boolean
  onHide: () => void
}

const Navigation = (props: NavigationProps) => {
  const hideNavHandler = () => {
    props.onHide()
  }

  return (
    <nav
      className={`${classes.navigation} ${
        props.show ? classes["nav-active"] : ""
      }`}
    >
      <ul>
        <li onClick={hideNavHandler}>
          <NavLink
            to="/women"
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
          >
            women
          </NavLink>
        </li>
        <li onClick={hideNavHandler}>
          <NavLink
            to="/men"
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
          >
            men
          </NavLink>
        </li>
        <li onClick={hideNavHandler}>
          <NavLink
            to="/kids"
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
          >
            kids
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
