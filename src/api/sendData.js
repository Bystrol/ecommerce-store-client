export const sendCartData = async (item) => {
  try {
    const response = await fetch(
      "https://online-store-b05f3-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error();
    }
  } catch {
    alert("Could not add item to the cart!");
  }
};

export default sendData;
