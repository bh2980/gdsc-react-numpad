import styles from "./BottomButton.module.css";

function BottomButton({ onClassName, btn_value, onClick, onDisabled }) {
  return (
    <button
      className={onClassName === "normal" ? styles.normal : styles.call}
      value={btn_value}
      onClick={onClick}
      disabled={onClassName === "normal" ? false : onDisabled}
    >
      {btn_value}
    </button>
  );
}

export default BottomButton;
