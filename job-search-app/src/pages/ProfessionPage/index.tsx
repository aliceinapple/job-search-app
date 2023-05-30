import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import JobCard from "../../components/JobCard";
import styles from "./ProfessionPage.module.scss";
import { getData } from "../../components/API";
import { setJobCard } from "../../store/jobCardSlice";

const ProfessionPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const jobCard = useSelector((state: RootState) => state.jobCard.value);

  if (jobCard.id === 0) {
    getData(`vacancies/${id}`).then((data) => dispatch(setJobCard(data)));
  }

  const html = (
    <div dangerouslySetInnerHTML={{ __html: jobCard.vacancyRichText }}></div>
  );

  return (
    <div className={styles.jobCardPage} id={id}>
      <JobCard
        id={jobCard.id}
        profession={jobCard.profession}
        firm_name={jobCard.firm_name}
        payment_to={jobCard.payment_to}
        payment_from={jobCard.payment_from}
        currency={jobCard.currency}
        type_of_work={jobCard.type_of_work}
        town={jobCard.town}
        vacancyRichText={jobCard.vacancyRichText}
        classname={styles.transformCard}
      />
      <div className={styles.description}>{html}</div>
    </div>
  );
};

export default ProfessionPage;
