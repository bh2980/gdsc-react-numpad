import styles from "./Button.module.css";

function Button({ btn_value, onClick }) {
  return (
    <button className={styles.nbtn} value={btn_value} onClick={onClick}>
      {btn_value}
    </button>
  );
}

export default Button;
