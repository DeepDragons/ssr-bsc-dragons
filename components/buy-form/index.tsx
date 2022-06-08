import styles from "./index.module.scss";

import classNames from "classnames";
import React from "react";

import { Switcher } from '@/components/switcher';
import { Indexer } from '@/components/indexer';


export const BuyForm: React.FC = () => {
  const [selectedtoken, setSelectedtoken] = React.useState(0);
  const [dragons, setDragons] = React.useState(1);

  return (
    <form className={styles.container}>
      <div className={styles.header}>
        <h2>
          Buy Dragons
        </h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.element}>
          <p>
            Choose token
          </p>
          <Switcher
            elements={['BNB', 'DFT']}
            selected={selectedtoken}
            onSelect={setSelectedtoken}
          />
        </div>
        <div className={styles.element}>
          <p>
            Number of dragons
          </p>
          <Indexer
            value={dragons}
            max={16}
            onInput={setDragons}
          />
        </div>
        <div className={styles.element}>
          <button>
            Buy
          </button>
        </div>
      </div>
    </form>
  );
};
