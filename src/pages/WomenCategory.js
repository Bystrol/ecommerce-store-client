import ClothItem from "../components/ClothItem";
import classes from "./WomenCategory.module.css";

const CategoryPage = () => {
  return (
    <div className={classes.body}>
      <p>Women category</p>
      <div className={classes.items}>
        <ClothItem />
        <ClothItem />
        <ClothItem />
        <ClothItem />
        <ClothItem />
        <ClothItem />
        <ClothItem />
        <ClothItem />
      </div>
    </div>
  );
};

export default CategoryPage;
