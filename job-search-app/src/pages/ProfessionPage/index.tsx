import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import JobCard from "../../components/JobCard";

const ProfessionPage = () => {
  const { id } = useParams();
  const jobCard = useSelector((state: RootState) => state.jobCard.value);
  const html = (
    <div dangerouslySetInnerHTML={{ __html: jobCard.vacancyRichText }}></div>
  );

  return (
    <div id={id}>
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
      />
      <div>{html}</div>
    </div>
  );
};

export default ProfessionPage;
