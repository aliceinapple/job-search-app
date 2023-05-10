import { Button, ResetButton } from "../../UI/Button";
import IndustryInput from "../../UI/IndustryInput";
import SalaryInput from "../../UI/SalaryInput";

import styles from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={styles.filtersBlock}>
      <div className={styles.filters}>
        <h2>Фильтры</h2>
        <ResetButton text="Сбросить все х" />
      </div>
      <div className={styles.industry}>
        <h3>Отрасль</h3>
        <IndustryInput />
      </div>
      <div className={styles.salary}>
        <h3>Оклад</h3>
        <SalaryInput type="от" />
        <SalaryInput type="до" />
      </div>
      <Button text="Применить" />
    </div>
  );
};

export default Filters;
