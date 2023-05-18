import { useEffect, useState } from "react";
import { getData } from "../../components/API";
import styles from "./IndustryInput.module.scss";
import { ArrowIconLarge } from "../Icons";
import { useDispatch } from "react-redux";
import { setIndustryValue } from "../../store/industrySlice";

interface IOptionType {
  title: string;
  key: number;
}

const IndustryInput = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    getData("catalogues").then((data) => setData(data));
    dispatch(setIndustryValue(value && `catalogues=${value}`));
  }, [value, dispatch]);

  return (
    <div className={styles.industryInputBlock}>
      <select value={value} onChange={handleSelect}>
        <option value="">Выберите отрасль</option>
        {data.map((item: IOptionType, index) => (
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
