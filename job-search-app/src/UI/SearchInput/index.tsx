import { Button } from "../Button";
import styles from "./SearchInput.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../store/searchSlice";
import { LoupeIcon } from "../Icons";

interface ISearchInput {
  search: VoidFunction;
}

const SearchInput = ({ search }: ISearchInput) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

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
        ></input>
      </div>
      <div>
        <Button text="Поиск" onClick={search} />
      </div>
    </div>
  );
};

export default SearchInput;
