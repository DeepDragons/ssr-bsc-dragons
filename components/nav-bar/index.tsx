import styles from "./index.module.scss";

import classNames from "classnames";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    path: `/store`,
    name: `Store`,
  },
  {
    path: `/dragons`,
    name: `Dragons`,
  },
  {
    path: `/fights`,
    name: `Fights`,
  }
];

export const Navbar: React.FC = () => {
  const router = useRouter();

  console.log(router.pathname)

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
              DragonBSC
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
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
