import { Link } from "react-router-dom";
import styles from "./Favorites.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import JobCard from "../../components/JobCard";

const Favorites = () => {
  const favorites = useSelector((state: RootState) => state.favorites.value);
  console.log(favorites);

  return (
    <div className={styles.favorites}>
      {favorites.length ? (
        favorites.map((item, index) => (
          <JobCard
            id={item.id}
            key={index}
            profession={item.profession}
            firm_name={item.firm_name}
            payment_to={item.payment_to}
            payment_from={item.payment_from}
            currency={item.currency}
            type_of_work={item.type_of_work}
            town={item.town}
            vacancyRichText={item.vacancyRichText}
          />
        ))
      ) : (
        <div className={styles.emptyFavorites}>
          <div className={styles.notFoundImg}></div>
          <h2>Упс, здесь еще ничего нет!</h2>
          <Link to={"/main"}>
            <button className={styles.toMainBtn}>Поиск Вакансий</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
