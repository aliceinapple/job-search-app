import { Link } from "react-router-dom";
import { LocationIcon, StarIcon } from "../../UI/Icons";
import styles from "./JobCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setJobCard } from "../../store/jobCardSlice";
import { RootState } from "../../store/store";
import { setFavoritesValue } from "../../store/favoritesSlice";

export interface IJobCard {
  id: number;
  profession: string;
  firm_name: string;
  type_of_work: {
    title: string;
  };
  town: {
    title: string;
  };
  payment_to?: string;
  payment_from?: string;
  currency: string;
  vacancyRichText: string;
  classname?: string;
  selected?: boolean;
}

const JobCard = ({
  id,
  profession,
  firm_name,
  payment_to,
  payment_from,
  currency,
  type_of_work,
  town,
  vacancyRichText,
  classname = "",
}: IJobCard) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.value);
  const isFavorite = favorites.some((item) => item.id === id);

  const card = {
    id,
    profession,
    firm_name,
    payment_to,
    payment_from,
    currency,
    type_of_work,
    town,
    vacancyRichText,
    selected: isFavorite,
  };

  const getJobData = () => {
    dispatch(setJobCard(card));
  };

  const addToFavorites = () => {
    const updatedFavorites = isFavorite
      ? favorites.filter((item) => item.id !== id)
      : [...favorites, card];
    dispatch(setFavoritesValue(updatedFavorites));
  };

  return (
    <div className={`${styles.jobCard} ${classname}`}>
      <div className={styles.firmName}>
        <h2>
          <Link onClick={getJobData} to={`/profession/${id}`}>
            {profession} ({firm_name})
          </Link>
        </h2>
        <StarIcon isFavorite={card.selected} addToFavorites={addToFavorites} />
      </div>
      <div className={`${styles.payment} ${classname}`}>
        <span>
          з/п {payment_from || ""} {payment_to ? `- ${payment_to}` : ""}
          {!payment_from && !payment_to ? "Не указана" : ` ${currency}`}
        </span>
        <li>{type_of_work.title}</li>
      </div>
      <div>
        <LocationIcon />
        <span>{town.title}</span>
      </div>
    </div>
  );
};

export default JobCard;
