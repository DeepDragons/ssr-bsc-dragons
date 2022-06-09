import styles from "./index.module.scss";

import classNames from "classnames";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { ConnectButton } from '@/components/connect-button';

const links = [
  {
    path: `/store`,
    name: `store`,
  },
  {
    path: `/dragons`,
    name: `dragons`,
  },
  {
    path: `/fights`,
    name: `fights`,
  }
];

export const Navbar: React.FC = () => {
  const commonTranslation = useTranslation(`common`);
  const router = useRouter();

  return (
    <nav className={styles.container}>
      <Link href="/" passHref>
        <div>
            <Image
              src="/icons/logo.png"
              alt="Logo"
              height="40"
              width="19"
            />
            <h4>
              {commonTranslation.t('title')}
            </h4>
        </div>
      </Link>
      <ul>
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            passHref
          >
            <li className={classNames(styles.link, { selected: router.pathname === link.path })}>
              {commonTranslation.t(`links.${link.name}`)}
            </li>
          </Link>
        ))}
      </ul>
      <ConnectButton />
    </nav>
  );
};
