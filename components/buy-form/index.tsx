import styles from "./index.module.scss";

import { useTranslation } from "next-i18next";
import React from "react";

import { Switcher } from '@/components/switcher';
import { Indexer } from '@/components/indexer';


export const BuyForm: React.FC = () => {
  const storeTranslation = useTranslation(`store`);

  const [selectedtoken, setSelectedtoken] = React.useState(0);
  const [dragons, setDragons] = React.useState(1);

  return (
    <form className={styles.container}>
      <div className={styles.header}>
        <h2>
          {storeTranslation.t('title')}
        </h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.element}>
          <p>
            {storeTranslation.t('tokens')}
          </p>
          <Switcher
            elements={['BNB', 'DFT']}
            selected={selectedtoken}
            onSelect={setSelectedtoken}
          />
        </div>
        <div className={styles.element}>
          <p>
            {storeTranslation.t('dragons')}
          </p>
          <Indexer
            value={dragons}
            max={16}
            onInput={setDragons}
          />
        </div>
        <div className={styles.element}>
          <button>
            {storeTranslation.t('button')}
          </button>
        </div>
      </div>
    </form>
  );
};
