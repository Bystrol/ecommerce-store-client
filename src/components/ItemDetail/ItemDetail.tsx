import classes from "./ItemDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartActions } from "../../store/cartSlice";
import { useState } from "react";

const ItemDetail = (props) => {
  const [size, setSize] = useState("xs");
  const [color, setColor] = useState("brown");

  const currency = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        key: props.id,
        name: props.name,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: 1,
        size: size,
        color: color,
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
              <input
                type="radio"
                name="size"
                id="xs"
                defaultChecked
                onClick={() => {
                  setSize("xs");
                }}
              ></input>
              <label htmlFor="xs">xs</label>
            </div>
            <div>
              <input
                type="radio"
                name="size"
                id="s"
                onClick={() => {
                  setSize("s");
                }}
              ></input>
              <label htmlFor="s">s</label>
            </div>
            <div>
              <input
                type="radio"
                name="size"
                id="m"
                onClick={() => {
                  setSize("m");
                }}
              ></input>
              <label htmlFor="m">m</label>
            </div>
            <div>
              <input
                type="radio"
                name="size"
                id="l"
                onClick={() => {
                  setSize("l");
                }}
              ></input>
              <label htmlFor="l">l</label>
            </div>
          </div>
          <div className={classes.color}>
            <p>color:</p>
            <input
              type="radio"
              name="color"
              defaultChecked
              onClick={() => {
                setColor("brown");
              }}
            />
            <input
              type="radio"
              name="color"
              onClick={() => {
                setColor("gray");
              }}
            />
            <input
              type="radio"
              name="color"
              onClick={() => {
                setColor("black");
              }}
            />
          </div>
          <div className={classes.price}>
            <p>price:</p>
            {<Price />}
          </div>
          <button onClick={addToCartHandler}>add to cart</button>
          <p className={classes.description}>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
