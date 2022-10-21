import { categoryActions } from "./categorySlice";
import { detailActions } from "./detailSlice";

export const fetchCategoryData = (category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://online-store-b05f3-default-rtdb.firebaseio.com/${category}.json`
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      dispatch(categoryActions.fetchData(data || []));
    } catch (error) {
      alert(
        "Could not fetch the data! Make sure that you've entered the API URL correctly."
      );
    }
  };
};

export const fetchDetailData = (category, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://online-store-b05f3-default-rtdb.firebaseio.com/${category}.json`
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      const detailItem = await data.filter((item) => item.id === id);

      dispatch(detailActions.setItem(detailItem));
    } catch (error) {
      alert(
        "Could not fetch the data! Make sure that you've entered the API URL correctly."
      );
    }
  };
};
