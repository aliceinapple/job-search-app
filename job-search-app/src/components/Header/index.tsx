import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoImg}></div>
        <span>Jobored</span>
      </div>
      <div>
        <span>Поиск Вакансий</span>
        <span>Избранное</span>
      </div>
    </header>
  );
};

export default Header;
