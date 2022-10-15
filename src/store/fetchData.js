import { categoryActions } from "./categorySlice";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://online-store-b05f3-default-rtdb.firebaseio.com/women.json"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      dispatch(categoryActions.fetchData(data || []));
    } catch (error) {}
  };
};
