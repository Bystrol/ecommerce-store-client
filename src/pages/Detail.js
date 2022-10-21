import { fetchDetailData } from "../store/fetchData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import { categoryActions } from "../store/categorySlice";

const Detail = () => {
  const itemId = useParams("id").id;
  const category = useParams("category").category;

  const clickedItem = useSelector((state) => state.detail.item);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailData(category, itemId));
    dispatch(categoryActions.clearArray());
  }, []);

  return (
    <>
      {clickedItem.map((item) => {
        return (
          <ItemDetail
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </>
  );
};

export default Detail;
