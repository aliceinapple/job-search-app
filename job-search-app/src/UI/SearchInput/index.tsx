import { Button } from "../Button";
import styles from "./SearchInput.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../store/searchSlice";
import { LoupeIcon } from "../Icons";
import { RootState } from "../../store/store";

interface ISearchInput {
  search: VoidFunction;
}

const SearchInput: React.FC<ISearchInput> = ({ search }) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.search.value);

  const [inputValue, setInputValue] = useState(searchValue);

  useEffect(() => {
    dispatch(setSearchValue(inputValue));
  }, [inputValue, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.searchInputBlock}>
      <div className={styles.searchInput}>
        <LoupeIcon />
        <input
          type="text"
          placeholder="Введите название вакансии"
          value={inputValue}
          onChange={handleInputChange}
          data-elem="search-input"
        ></input>
      </div>
      <div>
        <Button text="Поиск" onClick={search} />
      </div>
    </div>
  );
};

export default SearchInput;
