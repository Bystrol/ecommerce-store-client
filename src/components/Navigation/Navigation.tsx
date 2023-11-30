import classes from "./Navigation.module.css"
import { NavLink } from "react-router-dom"

type NavigationProps = {
  show: boolean
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav
      className={`${classes.navigation} ${
        props.show ? classes["nav-active"] : ""
      }`}
    >
      <ul>
        <li>
          <NavLink
            to="/category/women"
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
          >
            women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/men"
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
          >
            men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/kids"
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
