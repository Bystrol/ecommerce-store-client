import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ClothItem from "../components/ClothItem";
import classes from "./WomenCategory.module.css";
import { fetchData } from "../store/fetchData";

const CategoryPage = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.category.items);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className={classes.body}>
      <p>Women category</p>
      <div className={classes.items}>
        {items.map((item) => {
          return (
            <ClothItem
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              isAvailable={item.isAvailable}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
