import styles from "./index.module.scss";

import classNames from "classnames";
import React from "react";

import { Switcher } from '@/components/switcher';


export const BuyForm: React.FC = () => {
  const [selectedtoken, setSelectedtoken] = React.useState(0);

  return (
    <form className={styles.container}>
      <div className={styles.header}>
        <h2>
          Buy Dragons
        </h2>
      </div>
      <div className={styles.wrapper}>
        <div>
          <Switcher
            elements={['BNB', 'DFT']}
            selected={selectedtoken}
            onSelect={setSelectedtoken}
          />
        </div>
      </div>
    </form>
  );
};
