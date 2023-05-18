import { useEffect, useState } from "react";
import { ArrowIcon } from "../Icons";
import styles from "./SalaryInput.module.scss";
import { useDispatch } from "react-redux";
import { setSalaryFromValue } from "../../store/salaryFromSlice";
import { setSalaryToValue } from "../../store/salaryToSlice";

interface ISalaryInput {
  type: string;
}

const SalaryInput = ({ type }: ISalaryInput) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (type === "от") {
      value ? dispatch(setSalaryFromValue(`payment_from=${value}`)) : "";
    } else {
      value ? dispatch(setSalaryToValue(`payment_to=${value}`)) : "";
    }
  }, [value, type, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

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
        onChange={handleInputChange}
      ></input>
      <div className={styles.arrowBlock}>
        <ArrowIcon rotate={0} onClick={increase} />
        <ArrowIcon rotate={180} onClick={decrease} />
      </div>
    </div>
  );
};

export default SalaryInput;
