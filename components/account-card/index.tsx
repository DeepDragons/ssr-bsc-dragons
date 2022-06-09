import type { WalletStore } from "@/types";

import styles from "./index.module.scss";

import React from "react";
import copy from "clipboard-copy";

import { useTranslation } from "next-i18next";

import { CopyIcon } from "components/icons/copy";
import { ViewIcon } from "components/icons/view";

import { trim } from "@/filters/trim";

type Prop = {
  wallet: WalletStore;
};

export var AccountCard: React.FC<Prop> = function ({ wallet }) {
  const common = useTranslation(`common`);

  return (
    <div className={styles.container}>
      <p>
        {common.t(`connected_via`, {
          type: 'MetaMask'
        })}
        {` `}
        {'net'}
        .
      </p>
      <h4>
        {wallet ? trim(wallet.accounts[0], 15) : ``}
      </h4>
      <div className={styles.row}>
        <div
          className={styles.copy}
          onClick={() => copy(String(wallet.accounts[0]))}
        >
          <CopyIcon />
          <p>
            {common.t(`copy_adr`)}
          </p>
        </div>
        <a
          className={styles.second}
          href={wallet.accounts[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ViewIcon />
          <p>
            {common.t(`view_explorer`)}
          </p>
        </a>
      </div>
    </div>
  );
};
