import { useEffect, useState } from "react";
import SearchInput from "../../UI/SearchInput";
import { getData } from "../../components/API";
import Filters from "../../components/Filters";
import JobCard, { IJobCard } from "../../components/JobCard";
import styles from "./JobSearchPage.module.scss";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const JobSearchPage = () => {
  const [data, setData] = useState<IJobCard[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 4;
  const searchValue = useSelector((state: RootState) => state.search.value);
  const industryValue = useSelector((state: RootState) => state.industry.value);
  const salaryFromValue = useSelector(
    (state: RootState) => state.salaryFrom.value
  );
  const salaryToValue = useSelector((state: RootState) => state.salaryTo.value);

  const handleSearch = async (pageNumber: number) => {
    const queryParameters = [
      `page=${pageNumber + 1}`,
      `count=${itemsPerPage}`,
      searchValue && `keyword=${searchValue}`,
      industryValue && `catalogues=${industryValue}`,
      salaryFromValue && `payment_from=${salaryFromValue}`,
      salaryToValue && `payment_to=${salaryToValue}`,
    ]
      .filter((item) => item)
      .join("&");

    const data = await getData(`vacancies/?${queryParameters}`);
    setData(data.objects);
    setTotalItems(data.total);
  };

  const totalPage = Math.max(Math.ceil(totalItems / itemsPerPage), 0);
  const pageCount = totalPage > 500 ? 500 : totalPage;

  const handlePageChange = (selectedItem: { selected: number }) => {
    if (selectedItem.selected < 0) {
      setCurrentPage(0);
      handleSearch(currentPage);
    } else if (selectedItem.selected >= totalPage) {
      setCurrentPage(totalPage - 1);
      handleSearch(currentPage);
    } else {
      setCurrentPage(selectedItem.selected);
      handleSearch(currentPage);
    }
  };

  useEffect(() => {
    handleSearch(currentPage);
  },[]);

  return (
    <main className="main">
      <div className={styles.jobPageContainer}>
        <div className={styles.jobSearchPage}>
          <Filters apply={() => handleSearch(currentPage)} />
          <div>
            <div className={styles.jobCardsBlock}>
              <SearchInput search={() => handleSearch(currentPage)} />
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
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          containerClassName={styles.pagination}
          disabledClassName={styles.disabled}
          activeClassName={styles.active}
          previousLinkClassName={styles.prev}
          nextLinkClassName={styles.next}
          breakLabel=""
        />
      </div>
    </main>
  );
};

export default JobSearchPage;
