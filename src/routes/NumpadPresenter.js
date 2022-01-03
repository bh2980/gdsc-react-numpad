import Button from "./Button.js";
import styles from "./NumpadPresenter.module.css";
import { Link } from "react-router-dom";

function NumpadPresenter({ input, onClick, onReset, onDelete, btn_disabled }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.numpad}>
        <div className={styles.screen}>{input}</div>
        <div>
          <Button btn_value="1" onClick={onClick}></Button>
          <Button btn_value="2" onClick={onClick}></Button>
          <Button btn_value="3" onClick={onClick}></Button>
        </div>
        <div>
          <Button btn_value="4" onClick={onClick}></Button>
          <Button btn_value="5" onClick={onClick}></Button>
          <Button btn_value="6" onClick={onClick}></Button>
        </div>
        <div>
          <Button btn_value="7" onClick={onClick}></Button>
          <Button btn_value="8" onClick={onClick}></Button>
          <Button btn_value="9" onClick={onClick}></Button>
        </div>
        <div>
          <Button btn_value="X" onClick={onReset}></Button>
          <Button btn_value="0" onClick={onClick}></Button>
          <Button btn_value="◀" onClick={onDelete}></Button>
        </div>
      </div>
      <div className="numpad">
        <Link to={`/result/${input}`}>
          <button
            className={btn_disabled ? styles.deactive : styles.active}
            disabled={btn_disabled}
          >
            제출 버튼
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NumpadPresenter;
