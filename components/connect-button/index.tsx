import styles from "./index.module.scss";

import classNames from "classnames";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";


export const ConnectButton: React.FC = () => {
  const commonTranslation = useTranslation(`common`);

  return (
    <button className={styles.container}>
      {commonTranslation.t('connect_btn')}
    </button>
  );
};
