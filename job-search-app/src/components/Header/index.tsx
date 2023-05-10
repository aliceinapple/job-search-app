import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <div className={styles.headerLogoImg}></div>
        <h1>Jobored</h1>
      </div>
      <nav className={styles.headerNav}>
        <div>
          <ul>
            <li>Поиск Вакансий</li>
            <li>Избранное</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
