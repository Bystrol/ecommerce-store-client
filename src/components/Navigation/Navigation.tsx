import classes from "./Navigation.module.css"
import { NavLink } from "react-router-dom"
import useNavigationLinks from "../../hooks/navigation/useNavigationLinks"

type NavigationProps = {
  show: boolean
}

const Navigation = (props: NavigationProps) => {
  const navLinks = useNavigationLinks()

  return (
    <nav
      className={`${classes.navigation} ${
        props.show ? classes["nav-active"] : ""
      }`}
    >
      <ul>
        {navLinks.map((link, index) => {
          return (
            link.canBeAccessed && (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={(navData) =>
                    navData.isActive ? classes.active : classes.link
                  }
                >
                  {link.categoryName}
                </NavLink>
              </li>
            )
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
