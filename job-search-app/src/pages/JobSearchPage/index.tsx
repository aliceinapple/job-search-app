import { useEffect, useState } from "react";
import SearchInput from "../../UI/SearchInput";
import { getData } from "../../components/API";
import Filters from "../../components/Filters";
import JobCard, { IJobCard } from "../../components/JobCard";
import styles from "./JobSearchPage.module.scss";

interface IJobSearchData {
  objects: IJobCard[];
}

const JobSearchPage = () => {
  const [data, setData] = useState<IJobCard[]>([]);

  useEffect(() => {
    getData("vacancies").then((data: IJobSearchData) => setData(data.objects));
  }, []);

  return (
    <main className={styles.main}>
      <Filters />
      <div>
        <SearchInput />
      </div>
      <div>
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
    </main>
  );
};

export default JobSearchPage;
