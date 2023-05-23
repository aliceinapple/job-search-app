import { useEffect, useState } from "react";
import { ArrowIcon } from "../Icons";
import styles from "./SalaryInput.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSalaryFromValue } from "../../store/salaryFromSlice";
import { setSalaryToValue } from "../../store/salaryToSlice";
import { RootState } from "../../store/store";

interface ISalaryInput {
  type: string;
}

const SalaryInput: React.FC<ISalaryInput> = ({ type }) => {
  const dispatch = useDispatch();

  const salaryFromValue = useSelector(
    (state: RootState) => state.salaryFrom.value
  );
  const salaryToValue = useSelector((state: RootState) => state.salaryTo.value);

  const [value, setValue] = useState(
    type === "от" ? salaryFromValue : salaryToValue
  );

  useEffect(() => {
    if (type === "от") {
      dispatch(setSalaryFromValue(value));
    } else {
      value;
      dispatch(setSalaryToValue(value));
    }
  }, [value, type, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, "");
    setValue(sanitizedValue);
  };

  const increase = () => {
    if (Number(value) >= 0) {
      setValue((prev) => String(Number(prev) + 1));
    }
  };

  const decrease = () => {
    if (Number(value) > 0) {
      setValue((prev) => String(Number(prev) - 1));
    }
  };

  return (
    <div className={styles.salaryInputBlock}>
      <input
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        placeholder={type}
        value={value}
        onChange={handleInputChange}
        data-elem="salary-from-input salary-to-input"
      ></input>
      <div className={styles.arrowBlock}>
        <ArrowIcon rotate={0} onClick={increase} />
        <ArrowIcon rotate={180} onClick={decrease} />
      </div>
    </div>
  );
};

export default SalaryInput;
