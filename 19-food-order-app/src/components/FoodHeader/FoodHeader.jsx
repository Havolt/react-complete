import styles from "./FoodHeader.module.css";
import logo from "../../assets/logo.jpg";

function FoodHeader() {
  return (
    <header className={styles["main-header"]}>
      <div className={styles["title"]}>
        <img src={logo} alt="Food Logo" className={styles["logo"]} />
        <h1>ReactFood</h1>
      </div>
      <button>Cart</button>
    </header>
  );
}

export default FoodHeader;
