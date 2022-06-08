import styles from "./index.module.scss";

import classNames from "classnames";
import React from "react";
import Image from "next/image";
import Link from "next/link";


export const ConnectButton: React.FC = () => {
  return (
    <button className={styles.container}>
      Connect
    </button>
  );
};
