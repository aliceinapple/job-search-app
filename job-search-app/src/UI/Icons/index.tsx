import styles from "./Icons.module.scss";

interface IStarIcon {
  isFavorite: boolean;
  addToFavorites: VoidFunction;
  id: number;
}

interface IArrowIcon {
  rotate: number;
  onClick?: VoidFunction;
  isOpen?: boolean;
}

export const StarIcon: React.FC<IStarIcon> = ({
  isFavorite,
  addToFavorites,
  id,
}) => {
  const stroke = isFavorite;
  return (
    <svg
      className={styles.star + (stroke ? ` ${styles.selected}` : "")}
      data-elem={`vacancy-${id}-shortlist-button`}
      onClick={addToFavorites}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.97183 1.70846C10.4382 0.933481 11.5618 0.933482 12.0282 1.70847L14.3586 5.58087C14.5262 5.85928 14.7995 6.05784 15.116 6.13116L19.5191 7.15091C20.4002 7.35499 20.7474 8.42356 20.1545 9.10661L17.1918 12.5196C16.9788 12.765 16.8744 13.0863 16.9025 13.41L17.2932 17.9127C17.3714 18.8138 16.4625 19.4742 15.6296 19.1214L11.4681 17.3583C11.1689 17.2316 10.8311 17.2316 10.5319 17.3583L6.37038 19.1214C5.53754 19.4742 4.62856 18.8138 4.70677 17.9127L5.09754 13.41C5.12563 13.0863 5.02124 12.765 4.80823 12.5196L1.8455 9.1066C1.25257 8.42356 1.59977 7.35499 2.48095 7.15091L6.88397 6.13116C7.20053 6.05784 7.47383 5.85928 7.64138 5.58087L9.97183 1.70846Z"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const ArrowIcon: React.FC<IArrowIcon> = ({ rotate, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={styles.arrow}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 4.5L5.39047 1.83469C5.16578 1.6421 4.83422 1.6421 4.60953 1.83469L1.5 4.5"
        stroke="#ACADB9"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ArrowIconLarge: React.FC<IArrowIcon> = ({
  rotate,
  onClick,
  isOpen,
}) => {
  return (
    <svg
      onClick={onClick}
      className={`${styles.arrowLarge} ${isOpen ? styles.highlight : ""}`}
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1"
        stroke="#ACADB9"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const LocationIcon = () => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.714 12.8807C11.9335 13.6612 10.3013 15.2935 9.17814 16.4166C8.52727 17.0675 7.47304 17.0678 6.82217 16.4169C5.7186 15.3134 4.11797 13.7127 3.28593 12.8807C0.682439 10.2772 0.682439 6.05612 3.28593 3.45262C5.88943 0.849126 10.1105 0.849126 12.714 3.45262C15.3175 6.05612 15.3175 10.2772 12.714 12.8807Z"
        stroke="#ACADB9"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 8.16667C10.5 9.54738 9.38069 10.6667 7.99998 10.6667C6.61927 10.6667 5.49998 9.54738 5.49998 8.16667C5.49998 6.78595 6.61927 5.66667 7.99998 5.66667C9.38069 5.66667 10.5 6.78595 10.5 8.16667Z"
        stroke="#ACADB9"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LoupeIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.468 10.468L13.5714 13.5714M12.0924 6.54622C12.0924 9.60931 9.60931 12.0924 6.54622 12.0924C3.48313 12.0924 1 9.60931 1 6.54622C1 3.48313 3.48313 1 6.54622 1C9.60931 1 12.0924 3.48313 12.0924 6.54622Z"
        stroke="#ACADB9"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
