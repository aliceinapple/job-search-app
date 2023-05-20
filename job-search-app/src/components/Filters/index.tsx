import { useDispatch } from "react-redux";
import { Button, ResetButton } from "../../UI/Button";
import IndustryInput from "../../UI/IndustryInput";
import SalaryInput from "../../UI/SalaryInput";
import { useState } from "react";

import styles from "./Filters.module.scss";
import { setIndustryValue } from "../../store/industrySlice";
import { setSalaryFromValue } from "../../store/salaryFromSlice";
import { setSalaryToValue } from "../../store/salaryToSlice";

interface IFilters {
  apply: VoidFunction;
}

const Filters = ({ apply }: IFilters) => {
  const dispatch = useDispatch();
  const [industryResetCounter, setIndustryResetCounter] = useState(0);
  const [salaryFromResetCounter, setSalaryFromResetCounter] = useState(0);
  const [salaryToResetCounter, setSalaryToResetCounter] = useState(0);

  const onReset = () => {
    dispatch(setIndustryValue(""));
    dispatch(setSalaryFromValue(""));
    dispatch(setSalaryToValue(""));
    setIndustryResetCounter(industryResetCounter + 1);
    setSalaryFromResetCounter(salaryFromResetCounter + 1);
    setSalaryToResetCounter(salaryToResetCounter + 1);
  };

  return (
    <div className={styles.filtersBlock}>
      <div className={styles.filters}>
        <h2>Фильтры</h2>
        <ResetButton onClick={onReset} text="Сбросить все х" />
      </div>
      <div className={styles.industry}>
        <h3>Отрасль</h3>
        <IndustryInput key={`industryInput-${industryResetCounter}`} />
      </div>
      <div className={styles.salary}>
        <h3>Оклад</h3>
        <SalaryInput
          key={`salaryInputFrom-${salaryFromResetCounter}`}
          type="от"
        />
        <SalaryInput key={`salaryInputTo-${salaryToResetCounter}`} type="до" />
      </div>
      <Button text="Применить" onClick={apply} />
    </div>
  );
};

export default Filters;
