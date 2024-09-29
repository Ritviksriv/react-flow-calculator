import React from "react";
import styles from "../styles/landing-page/index.module.css";
import { FUNCTIONS_CHAIN } from "../constants";
import FunctionCardFlow from "../components/card";

const LandingPage = () => {
  return (
    <div className={styles['main-container']}>
        <FunctionCardFlow functions={FUNCTIONS_CHAIN} />
    </div>
  );
};

export default LandingPage;
