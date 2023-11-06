import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <p>Your order was sent successfully!</p>
      </div>
    </div>
  );
};

export default Checkout;
