import { useState } from "react";
import { ArrowIcon } from "../Icons";
import styles from "./SalaryInput.module.scss";

interface ISalaryInput {
  type: string;
}

const SalaryInput = ({ type }: ISalaryInput) => {
  const [value, setValue] = useState("");

  const increase = () => {
    setValue((prev) => String(Number(prev) + 1));
  };

  const decrease = () => {
    setValue((prev) => String(Number(prev) - 1));
  };

  return (
    <div className={styles.salaryInputBlock}>
      <input
        type="number"
        placeholder={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <div className={styles.arrowBlock}>
        <ArrowIcon rotate={0} onClick={increase} />
        <ArrowIcon rotate={180} onClick={decrease} />
      </div>
    </div>
  );
};

export default SalaryInput;
