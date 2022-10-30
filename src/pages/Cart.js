import classes from "./Cart.module.css";
import CartPageItem from "../components/CartPageItem";
import { useSelector } from "react-redux/es/exports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
  const amount = useSelector((state) => state.cart.amount);
  const total = useSelector((state) => state.cart.total);
  const currency = useSelector((state) => state.currency.currency);
  const items = useSelector((state) => state.cart.items);

  const itemsArrayIsEmpty = items.length === 0;

  const Total = () => {
    if (currency === "EUR") {
      return (
        <>
          <FontAwesomeIcon icon="fa-euro-sign" />
          {(total * 1.025).toFixed(2)}
        </>
      );
    } else if (currency === "GBP") {
      return (
        <>
          <FontAwesomeIcon icon="fa-sterling-sign" />
          {(total * 0.8985).toFixed(2)}
        </>
      );
    }

    return (
      <>
        <FontAwesomeIcon icon="fa-dollar-sign" />
        {total.toFixed(2)}
      </>
    );
  };

  const Tax = () => {
    if (currency === "EUR") {
      return (
        <>
          <FontAwesomeIcon icon="fa-euro-sign" />
          {(total * 1.025 * 0.21).toFixed(2)}
        </>
      );
    } else if (currency === "GBP") {
      return (
        <>
          <FontAwesomeIcon icon="fa-sterling-sign" />
          {(total * 0.8985 * 0.21).toFixed(2)}
        </>
      );
    }

    return (
      <>
        <FontAwesomeIcon icon="fa-dollar-sign" />
        {(total * 0.21).toFixed(2)}
      </>
    );
  };

  return (
    <>
      {!itemsArrayIsEmpty && (
        <div className={classes.cart}>
          <div className={classes.title}>
            <p>cart</p>
          </div>
          <ul className={classes.list}>
            {items.map((item) => {
              return (
                <CartPageItem
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                  imageUrl={item.imageUrl}
                  size={item.size}
                  color={item.color}
                />
              );
            })}
          </ul>
          <div className={classes.summary}>
            <div className={classes.names}>
              <p>Tax 21%:</p>
              <p>Quantity:</p>
              <p>Total:</p>
            </div>
            <div className={classes.values}>
              <p>{<Tax />}</p>
              <p>{amount}</p>
              <p>{<Total />}</p>
            </div>
          </div>
          <button>order</button>
        </div>
      )}
      {itemsArrayIsEmpty && (
        <div className={classes.emptyCart}>
          <div className={classes.title}>
            <p>cart</p>
          </div>
          <div className={classes.empty}>
            <p>Your cart is empty!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
