import { Link, useLocation } from "react-router-dom";
import styles from "./EmptyStatePage.module.scss";

const EmptyStatePage = () => {
  const location = useLocation();
  return (
    <div className={styles.emptyFavorites}>
      <div className={styles.notFoundImg}></div>
      <h2 className={styles.notFoundTitle}>
        {location.pathname === "/main" || location.pathname === "/"
          ? "Ничего не найдено"
          : "Упс, здесь еще ничего нет!"}
      </h2>
      {location.pathname === "/favorites" && (
        <Link to={"/main"}>
          <button className={styles.toMainBtn}>Поиск Вакансий</button>
        </Link>
      )}
    </div>
  );
};

export default EmptyStatePage;
