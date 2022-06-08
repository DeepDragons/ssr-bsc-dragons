import styles from "./index.module.scss";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [];

export const Navbar: React.FC = () => {

  return (
    <nav className={styles.container}>
      <Link  href="/" passHref>
        <div>
            <Image
              src="/icons/logo.png"
              alt="Logo"
              height="40"
              width="19"
            />
            <h2>
              DragonBSC
            </h2>
        </div>
      </Link>
      <ul>
        <li></li>
      </ul>
    </nav>
  );
};
