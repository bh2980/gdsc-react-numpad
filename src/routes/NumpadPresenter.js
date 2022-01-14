import Button from "../components/Button";
import BottomButton from "../components/BottomButton";
import styles from "./NumpadPresenter.module.css";
import { Link } from "react-router-dom";

function NumpadPresenter({ input, onClick, onReset, onDelete, onDisabled }) {
  return (
    <div className={styles.wrapper}>
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
        <Button btn_value="*" onClick={onClick}></Button>
        <Button btn_value="0" onClick={onClick}></Button>
        <Button btn_value="#" onClick={onClick}></Button>
      </div>
      <div>
        <BottomButton
          onClassName="normal"
          btn_value="❌"
          onClick={onReset}
          onDisabled={onDisabled}
        ></BottomButton>
        <Link to={`/result/${input}`}>
          <BottomButton
            onClassName="call"
            btn_value="📞"
            onDisabled={onDisabled}
          ></BottomButton>
        </Link>
        <BottomButton
          onClassName="normal"
          btn_value="🔙"
          onClick={onDelete}
          onDisabled={onDisabled}
        ></BottomButton>
      </div>
    </div>
  );
}

export default NumpadPresenter;
