import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.details}>
        <p className={classes.name}>Test</p>
        <p className={classes.price}>$10.99</p>
        <div className={classes.size}>
          <p>Size:</p>
          <div>
            <input type="radio" name={props.id} id="xs"></input>
            <p className={classes["size-p"]}>xs</p>
          </div>
          <div>
            <input type="radio" name={props.id} id="s"></input>
            <p className={classes["size-p"]}>s</p>
          </div>
          <div>
            <input type="radio" name={props.id} id="m"></input>
            <p className={classes["size-p"]}>m</p>
          </div>
          <div>
            <input type="radio" name={props.id} id="l"></input>
            <p className={classes["size-p"]}>l</p>
          </div>
        </div>
        <div className={classes.color}>
          <p>Color:</p>
          <input type="radio" name={props.name} />
          <input type="radio" name={props.name} />
          <input type="radio" name={props.name} />
        </div>
      </div>
      <div className={classes.amount}>
        <button>+</button>
        <p>1</p>
        <button>-</button>
      </div>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(
            "https://images.pexels.com/photos/9558246/pexels-photo-9558246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          )`,
          backgroundSize: "200% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </li>
  );
};

export default CartItem;
