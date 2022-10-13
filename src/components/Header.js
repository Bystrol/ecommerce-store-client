import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.categories}>
        <h2>WOMEN</h2>
        <h2>MEN</h2>
        <h2>KIDS</h2>
      </div>
      <img src="" className={classes.logo} />
      <div className={classes.payment}>
        <p>$</p>
        <p>Koszyk</p>
      </div>
    </div>
  );
};

export default Header;
