import styles from "./Button.module.scss";

interface IButton {
  text: string;
  onClick?: VoidFunction;
}

export const Button: React.FC<IButton> = ({ text, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      data-elem="search-button"
    >
      {text}
    </button>
  );
};

export const ResetButton: React.FC<IButton> = ({ text, onClick }) => {
  return (
    <button className={styles.resetButton} onClick={onClick}>
      {text}
    </button>
  );
};
