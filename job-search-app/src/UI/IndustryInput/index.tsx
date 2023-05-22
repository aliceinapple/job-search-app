import { useEffect, useState } from "react";
import styles from "./IndustryInput.module.scss";
import { ArrowIconLarge } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { setIndustryValue } from "../../store/industrySlice";
import { RootState } from "../../store/store";

export interface IOptionType {
  title: string;
  key: number;
}

const IndustryInput = () => {
  const dispatch = useDispatch();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [value, setValue] = useState("");

  const industryOptions = useSelector(
    (state: RootState) => state.industry.data
  );

  const handleToggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  useEffect(() => {
    dispatch(setIndustryValue(value));
  }, [value, dispatch]);

  return (
    <div
      className={`${styles.industryInputBlock} ${
        isOptionsOpen ? styles.highlight : ""
      }`}
    >
      <div className={styles.selectWrapper}>
        <div
          className={`${styles.select} ${isOptionsOpen ? styles.open : ""}`}
          onClick={handleToggleOptions}
        >
          <div className={styles.selectedOption}>
            {value ? (
              industryOptions.find((option) => option.key === parseInt(value))
                ?.title
            ) : (
              <span className={styles.placeholder}>Выберите отрасль</span>
            )}
          </div>
          <ArrowIconLarge
            isOpen={isOptionsOpen}
            rotate={isOptionsOpen ? 0 : 180}
          />
        </div>
        {isOptionsOpen && (
          <div className={styles.optionsBlockWrapper}>
            <div className={styles.optionsBlock}>
              <ul className={styles.options}>
                {industryOptions.map((option) => (
                  <li
                    key={option.key}
                    className={`${styles.option} ${
                      value === option.key.toString() ? styles.selected : ""
                    }`}
                    onClick={() => {
                      setValue(option.key.toString());
                      setIsOptionsOpen(false);
                    }}
                  >
                    {option.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryInput;
