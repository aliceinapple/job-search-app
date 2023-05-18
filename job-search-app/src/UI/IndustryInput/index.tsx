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
    const selectedOption = e.target.value;
    setValue(selectedOption);
    dispatch(setIndustryValue(`catalogues=${selectedOption}`));
  };

  useEffect(() => {
    getData("catalogues").then((data) => setData(data));
  }, []);

  return (
    <div className={styles.industryInputBlock}>
      <select value={value} onChange={handleSelect}>
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
