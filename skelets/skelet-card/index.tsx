import styles from "./index.module.scss";

import type React from "react";

export const SkeletCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.empety}/>
      <div className={styles.content}/>
    </div>
  );
};
