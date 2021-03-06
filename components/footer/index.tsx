import styles from "./index.module.scss";

import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

import { Contracts } from "@/config/contracts";


const keys = Object.keys(Contracts);
const values = Object.values(Contracts);
export const Footer: React.FC = ({
}) => {
  const commonTranslation = useTranslation(`common`);

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <h4>
          {commonTranslation.t('title')}
        </h4>
        <ul>
          <Link href="/privacy">
            <li className={styles.item}>
              {commonTranslation.t('privacy_policy')}
            </li>
          </Link>
          <Link href="/terms">
            <li className={styles.item}>
              {commonTranslation.t('terms_service')}
            </li>
          </Link>
          <Link href="/referral">
          <li className={styles.item}>
            {commonTranslation.t('referral_program')}
          </li>
          </Link>
        </ul>
      </div>
      <div className={styles.wrapper}>
        <h4>
          {commonTranslation.t('contracts')}
        </h4>
        <ul>
          {keys.map((keyName, index) => (
            <a
              key={keyName}
              href={values[index]}
              target="_blank"
              rel="noreferrer"
            >
              <li className={styles.item}>{keyName}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className={styles.wrapper}></div>
    </footer>
  );
};
