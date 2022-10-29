import classes from "./ClothItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { cartActions } from "../store/cartSlice";

const ClothItem = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const category = useParams("category").category;
  const currency = useSelector((state) => state.currency.currency);
  const isAvailable = props.isAvailable;

  const openDetailHandler = () => {
    navigate(`/${category}/${props.id}`);
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        key: props.id,
        name: props.name,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: 1,
        size: "xs",
        color: "brown",
      })
    );
  };

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
    <div className={classes.item}>
      <div
        className={classes.image}
        onClick={isAvailable ? openDetailHandler : null}
      >
        {!isAvailable && <p>Out of stock</p>}
        <img
          src={props.imageUrl}
          alt="Pink coat"
          className={isAvailable ? classes.available : classes.notAvailable}
        />
      </div>
      <div className={classes.button} onClick={addToCartHandler}>
        <FontAwesomeIcon icon="cart-shopping" className={classes.cart} />
      </div>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.price}>{<Price />}</p>
    </div>
  );
};

export default ClothItem;
