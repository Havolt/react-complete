import FoodHeader from "./components/FoodHeader";
import FoodShop from "./components/FoodShop";

import { useEffect, useContext } from "react";
import { CartContext } from "./store/cart-context";

import "./index.css";

const fetchData = async () => {
  calledApi = true;
  try {
    const response = await fetch("http://localhost:3000/meals");
    if (!response.ok) {
      throw new Error("Failed to fetch food data.");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching food data:", error);
  }
};

let calledApi = false;

function App() {
  const cart = useContext(CartContext);
  const getData = async () => {
    const data = await fetchData();
    if (data) {
      cart.updateMeals(data);
    }
  };

  useEffect(() => {
    if (calledApi) {
      return;
    }

    getData();
  }, []);
  return (
    <>
      <FoodHeader />
      <main>
        <FoodShop />
      </main>
    </>
  );
}

export default App;
