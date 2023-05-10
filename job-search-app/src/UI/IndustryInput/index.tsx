import { useEffect, useState } from "react";
import { getData } from "../../components/API";
import styles from "./IndustryInput.module.scss";
import { ArrowIconLarge } from "../Icons";

interface IOptionType {
  title: string;
}

const IndustryInput = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getData("catalogues").then((data) => setData(data));
  }, []);

  return (
    <div className={styles.industryInputBlock}>
      <select>
        {data.map((item: IOptionType, index) => (
          <option key={`${index}`}>{item.title}</option>
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
