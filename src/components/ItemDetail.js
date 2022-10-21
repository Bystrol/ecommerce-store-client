import classes from "./ItemDetail.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemDetail = (props) => {
  const currency = useSelector((state) => state.currency.currency);

  const Price = () => {
    if (currency === "EUR") {
      return (
        <>
          <FontAwesomeIcon icon="fa-euro-sign" />
          {(props.price * 1.025).toFixed(2)}
        </>
      );
    } else if (currency === "GBP") {
      return (
        <>
          <FontAwesomeIcon icon="fa-sterling-sign" />
          {(props.price * 0.8985).toFixed(2)}
        </>
      );
    }

    return (
      <>
        <FontAwesomeIcon icon="fa-dollar-sign" />
        {props.price}
      </>
    );
  };

  return (
    <div className={classes.main}>
      <div className={classes.body}>
        <div className={classes.images}>
          <div className={classes.leftSection}>
            <div className={classes.image}>
              <img src={props.imageUrl} alt={props.name} />
            </div>
            <div className={classes.image}>
              <img src={props.imageUrl} alt={props.name} />
            </div>
            <div className={classes.image}>
              <img src={props.imageUrl} alt={props.name} />
            </div>
          </div>
          <div className={classes.centerSection}>
            <img src={props.imageUrl} alt={props.name} />
          </div>
        </div>
        <div className={classes.rightSection}>
          <h1 className={classes.name}>{props.name}</h1>
          <div className={classes.size}>
            <p>size:</p>
            <div>
              <input type="radio" name="size" id="xs"></input>
              <label htmlFor="xs">xs</label>
            </div>
            <div>
              <input type="radio" name="size" id="s"></input>
              <label htmlFor="s">s</label>
            </div>
            <div>
              <input type="radio" name="size" id="m"></input>
              <label htmlFor="m">m</label>
            </div>
            <div>
              <input type="radio" name="size" id="l"></input>
              <label htmlFor="l">l</label>
            </div>
          </div>
          <div className={classes.color}>
            <p>color:</p>
            <input type="radio" name="color" />
            <input type="radio" name="color" />
            <input type="radio" name="color" />
          </div>
          <div className={classes.price}>
            <p>price:</p>
            {<Price />}
          </div>
          <button>add to cart</button>
          <p className={classes.description}>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
