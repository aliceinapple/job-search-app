import styles from "./Favorites.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import JobCard from "../../components/JobCard";
import EmptyStatePage from "../EmptyStatePage";

const Favorites = () => {
  const favorites = useSelector((state: RootState) => state.favorites.value);

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
        <EmptyStatePage />
      )}
    </div>
  );
};

export default Favorites;
