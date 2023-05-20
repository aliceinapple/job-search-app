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
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const industruOptions = useSelector(
    (state: RootState) => state.industry.data
  );

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(setIndustryValue(value && `catalogues=${value}`));
  }, [value, dispatch]);

  return (
    <div className={styles.industryInputBlock}>
      <select value={value} onChange={handleSelect}>
        <option value="">Выберите отрасль</option>
        {industruOptions.map((item: IOptionType, index) => (
          <option key={`${index}`} value={item.key}>
            {item.title}
          </option>
        ))}
      </select>
      <ArrowIconLarge
        rotate={isOpen ? 0 : 180}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default IndustryInput;
