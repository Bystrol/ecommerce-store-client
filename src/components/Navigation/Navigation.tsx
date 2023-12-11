import classes from "./Navigation.module.css"
import { NavLink } from "react-router-dom"

type NavigationProps = {
  show: boolean
  navLinks: {
    categoryName: string
    path: string
    canBeAccessed: boolean
  }[]
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav
      className={`${classes.navigation} ${
        props.show ? classes["nav-active"] : ""
      }`}
    >
      <ul>
        {props.navLinks.map((link, index) => {
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
