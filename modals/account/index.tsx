import styles from "./index.module.scss";

import React from "react";
import { useStore } from "react-stores";
import { useTranslation } from "next-i18next";

import { $wallet } from "@/store/accounts";

import { Modal, ModalHeader } from "components/modal";
import { AccountCard } from "@/components/account-card";

type Prop = {
  show: boolean;
  onClose: () => void;
};


export var AccountModal: React.FC<Prop> = function ({
  show,
  onClose
}) {
  const common = useTranslation(`common`);

  const wallet = useStore($wallet);

  return (
    <Modal
      show={show}
      title={(
        <ModalHeader onClose={onClose}>
          {common.t(`account`)}
        </ModalHeader>
      )}
      width="450px"
      onClose={onClose}
    >
      <AccountCard wallet={wallet} />
      <div className={styles.txlist}>
        {[].length === 0 ? (
          <p className={styles.here}>
            {common.t(`tx_appear_here`)}
          </p>
        ) : (
          <div>
            {/* <div className={styles.header}>
              <p>
                {common.t(`recent_txns`)}
              </p>
              <p
                className={styles.clear}
                onClick={() => resetTransactions(String(wallet?.bech32))}
              >
                (
                {common.t(`clear_all`)}
                )
              </p>
            </div>
            {transactions.map((tx) => (
              <TxCard key={tx.hash} tx={tx} />
            ))} */}
          </div>
        )}
      </div>
    </Modal>
  );
};
