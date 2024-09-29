import React from "react";
import styles from "../styles/landing-page/index.module.css";
import { FUNCTIONS_CHAIN } from "../constants";
import FunctionCardFlow from "../components/card"; // Make sure this is the correct import path

const LandingPage = () => {
  
  return (
    <div className={styles['main-container']}>
        {/* Pass the entire FUNCTIONS_CHAIN array to FunctionCardFlow */}
        <FunctionCardFlow functions={FUNCTIONS_CHAIN} />

    </div>
  );
};

export default LandingPage;
