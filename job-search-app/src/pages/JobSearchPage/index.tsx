import { useEffect, useState } from "react";
import SearchInput from "../../UI/SearchInput";
import { getData } from "../../components/API";
import Filters from "../../components/Filters";
import JobCard, { IJobCard } from "../../components/JobCard";
import styles from "./JobSearchPage.module.scss";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { setMainData } from "../../store/mainDataSlice";
import Loader from "../../components/Loader";

const JobSearchPage = () => {
  const dispatch = useDispatch();
  const mainData = useSelector((state: RootState) => state.mainData.value);
  const [data, setData] = useState<IJobCard[]>(mainData);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 4;
  const searchValue = useSelector((state: RootState) => state.search.value);
  const industryValue = useSelector((state: RootState) => state.industry.value);
  const salaryFromValue = useSelector(
    (state: RootState) => state.salaryFrom.value
  );
  const salaryToValue = useSelector((state: RootState) => state.salaryTo.value);

  const handleSearch = async (pageNumber: number) => {
    setIsLoading(true);
    try {
      const queryParameters = [
        `page=${pageNumber}`,
        `count=${itemsPerPage}`,
        searchValue && `keyword=${searchValue}`,
        industryValue && `catalogues=${industryValue}`,
        salaryFromValue && `payment_from=${salaryFromValue}`,
        salaryToValue && `payment_to=${salaryToValue}`,
      ]
        .filter((item) => item)
        .join("&");

      const result = await getData(`vacancies/?${queryParameters}`);
      setData(result.objects);
      dispatch(setMainData(result.objects));
      setTotalItems(result.total);
      setCurrentPage(pageNumber);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    handleSearch(selectedItem.selected);
  };

  const pageCount =
    Math.ceil(totalItems / itemsPerPage) > 500
      ? 500
      : Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setData(mainData);
  }, [mainData]);

  return (
    <main className="main">
      <div className={styles.jobPageContainer}>
        <div className={styles.jobSearchPage}>
          <Filters apply={() => handleSearch(currentPage)} />
          <div>
            <div className={styles.jobCardsBlock}>
              <SearchInput search={() => handleSearch(currentPage)} />
              {isLoading ? (
                <Loader />
              ) : (
                data.map((item, index) => (
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
              )}
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
          previousLinkClassName={styles.prev}
          nextLinkClassName={styles.next}
          disabledClassName={styles.disabled}
          activeClassName={styles.active}
          breakLabel=""
        />
      </div>
    </main>
  );
};

export default JobSearchPage;
