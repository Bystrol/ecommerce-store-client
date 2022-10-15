import classes from "./ClothItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

const ClothItem = (props) => {
  const navigate = useNavigate();

  const isAvailable = props.isAvailable;

  const openDetailHandler = (event) => {
    navigate(`/women/${props.id}`);
  };

  return (
    <div className={classes.item}>
      <div className={classes.image} onClick={openDetailHandler}>
        {!isAvailable && <p>Out of stock</p>}
        <img
          src={props.imageUrl}
          alt="Pink coat"
          className={isAvailable ? classes.available : classes.notAvailable}
        />
      </div>
      <div className={classes.button}>
        <FontAwesomeIcon icon="cart-shopping" className={classes.cart} />
      </div>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.price}>{props.price}</p>
    </div>
  );
};

export default ClothItem;
