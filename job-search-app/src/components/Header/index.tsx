import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <div className={styles.headerLogoImg}></div>
        <h1>Jobored</h1>
      </div>
      <nav className={styles.headerNav}>
        <div>
          <ul>
            <li
              className={
                location.pathname === "/" ||
                location.pathname === "/main" ||
                location.pathname.startsWith("/profession")
                  ? styles.active
                  : ""
              }
            >
              <Link to="/">Поиск Вакансий</Link>
            </li>
            <li
              className={
                location.pathname === "/favorites" ? styles.active : ""
              }
            >
              <Link to="/favorites">Избранное</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
