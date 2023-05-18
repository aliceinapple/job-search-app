import { useEffect, useState } from "react";
import SearchInput from "../../UI/SearchInput";
import { getData } from "../../components/API";
import Filters from "../../components/Filters";
import JobCard, { IJobCard } from "../../components/JobCard";
import styles from "./JobSearchPage.module.scss";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface IJobSearchData {
  objects: IJobCard[];
}

const JobSearchPage = () => {
  const [data, setData] = useState<IJobCard[]>([]);
  const searchValue = useSelector((state: RootState) => state.search.value);
  const industryValue = useSelector((state: RootState) => state.industry.value);
  const salaryFromValue = useSelector(
    (state: RootState) => state.salaryFrom.value
  );
  const salaryToValue = useSelector((state: RootState) => state.salaryTo.value);

  useEffect(() => {
    getData("vacancies").then((data: IJobSearchData) => setData(data.objects));
  }, []);

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
    console.log(`vacancies/?${queryParameters}`);
  };

  return (
    <main className="main">
      <div className={styles.jobSearchPage}>
        <Filters />
        <div>
          <div className={styles.jobCardsBlock}>
            <SearchInput search={handleSearch} />
            {data.map((item, index) => (
              <JobCard
                key={index}
                profession={item.profession}
                firm_name={item.firm_name}
                payment_to={item.payment_to}
                payment_from={item.payment_from}
                currency={item.currency}
                type_of_work={item.type_of_work}
                town={item.town}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobSearchPage;
