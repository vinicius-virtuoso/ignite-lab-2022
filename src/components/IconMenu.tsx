type Open = {
  isOpen: boolean;
  color: string;
};

export const IconMenu = (props: Open) => {
  return (
    <>
      {props.isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
        >
          <path
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 8l15.556 15.556M8 24L23.556 8.444"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
        >
          <path
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 16h22M5 8h22M5 24h22"
          ></path>
        </svg>
      )}
    </>
  );
};
