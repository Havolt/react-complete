import styles from "./FoodHeader.module.css";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

function FoodHeader() {
  const { items: cartItems } = useContext(CartContext);

  return (
    <header className={styles["main-header"]}>
      <div className={styles["title"]}>
        <img src={logo} alt="Food Logo" className={styles["logo"]} />
        <h1>ReactFood</h1>
      </div>
      <button>Cart({cartItems.length})</button>
    </header>
  );
}

export default FoodHeader;
