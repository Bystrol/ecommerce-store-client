import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navigationActions } from "../store/navigationSlice";

const Navigation = (props) => {
  const navIsVisible = useSelector((state) => state.navigation.isVisible);
  const dispatch = useDispatch();

  const hideNavHandler = () => {
    dispatch(navigationActions.hideNav());
  };

  return (
    <nav
      className={`${classes.navigation} ${
        navIsVisible ? classes["nav-active"] : ""
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
  );
};

export default Navigation;
