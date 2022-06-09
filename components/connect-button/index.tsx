import styles from "./index.module.scss";

import classNames from "classnames";
import detectEthereumProvider from '@metamask/detect-provider';
import React from "react";
import { useStore } from "react-stores";
import { useTranslation } from "next-i18next";
import { $wallet } from "@/store/accounts";
import { trim } from "@/filters/trim";
import { AccountModal } from "@/modals/account";


export const ConnectButton: React.FC = () => {
  const commonTranslation = useTranslation(`common`);

  const wallet = useStore($wallet);
  const [loading, setLoading] = React.useState(true);
  const [accountModal, setAccountModal] = React.useState(false);


  const buttonText = React.useMemo(() => {
    if (wallet.accounts.length > 0) {
      return trim(wallet.accounts[0]);
    }

    return commonTranslation.t('connect_btn')
  }, [wallet, commonTranslation]);


  const hanldeConnect = React.useCallback(async() => {
    if (wallet.accounts.length > 0) {
      setAccountModal(true);
      return;
    }

    setLoading(true);
    const provider: any = await detectEthereumProvider();
    setLoading(false);

    if (provider) {
      await provider.enable();

      const chainId = await provider.request({
        method: 'eth_chainId'
      });

      $wallet.setState({
        ...provider._state,
        chainId
      });

      console.log(chainId);
    } else {
      console.log('Please install MetaMask!');
    }
  }, [wallet]);

  React.useEffect(() => {
    return () => {
      hanldeConnect();
    };
  }, []);

  return (
    <>
      <div>
        <AccountModal
          show={accountModal}
          onClose={() => setAccountModal(false)}
        />
      </div>
      <button
        className={classNames(styles.container, {
          loading
        })}
        disabled={loading}
        onClick={hanldeConnect}
      >
        {buttonText}
      </button>
    </>
  );
};
