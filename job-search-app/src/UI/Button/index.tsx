import styles from "./Button.module.scss";

interface IButton {
  text: string;
  onClick?: VoidFunction;
}

export const Button = ({ text, onClick }: IButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export const ResetButton = ({ text, onClick }: IButton) => {
  return (
    <button className={styles.resetButton} onClick={onClick}>
      {text}
    </button>
  );
};
