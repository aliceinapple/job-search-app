import { Link } from "react-router-dom";
import styles from "./Favorites.module.scss";

const Favorites = () => {
  return (
    <div className={styles.favorites}>
      <div className={styles.notFoundImg}></div>
      <h2>Упс, здесь еще ничего нет!</h2>
      <Link to={"/main"}>
        <button className={styles.toMainBtn}>Поиск Вакансий</button>
      </Link>
    </div>
  );
};

export default Favorites;
