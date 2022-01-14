import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BottomButton from "../components/BottomButton";
import styles from "./Result.module.css";

function Result({ onDisabled }) {
  const { input } = useParams();
  return (
    <div className={styles.calling}>
      <div>{input}</div>
      <div className={styles.item}>🌏</div>
      <div className={styles.end}>
        <Link to={`/`}>
          <BottomButton btn_value="📞" onDisabled={onDisabled}></BottomButton>
        </Link>
      </div>
    </div>
  );
}

export default Result;
