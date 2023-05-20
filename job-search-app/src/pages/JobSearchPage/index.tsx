import { useState } from "react";
import SearchInput from "../../UI/SearchInput";
import { getData } from "../../components/API";
import Filters from "../../components/Filters";
import JobCard from "../../components/JobCard";
import styles from "./JobSearchPage.module.scss";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { Initial } from "../../components/Router";

const JobSearchPage = ({ initialData }: Initial) => {
  const [data, setData] = useState(initialData);
  const searchValue = useSelector((state: RootState) => state.search.value);
  const industryValue = useSelector((state: RootState) => state.industry.value);
  const salaryFromValue = useSelector(
    (state: RootState) => state.salaryFrom.value
  );
  const salaryToValue = useSelector((state: RootState) => state.salaryTo.value);

  const handleSearch = async () => {
    const queryParameters = [
      searchValue,
      industryValue,
      salaryFromValue,
      salaryToValue,
    ]
      .filter((item) => item)
      .join("&");

    const data = await getData(`vacancies/?${queryParameters}`);
    setData(data.objects);
  };

  return (
    <main className="main">
      <div className={styles.jobSearchPage}>
        <Filters apply={handleSearch} />
        <div>
          <div className={styles.jobCardsBlock}>
            <SearchInput search={handleSearch} />
            {data.map((item, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobSearchPage;
