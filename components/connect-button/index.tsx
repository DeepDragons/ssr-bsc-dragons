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
    if (wallet.account) {
      return trim(wallet.account);
    }

    return commonTranslation.t('connect_btn')
  }, [wallet, commonTranslation]);


  const hanldeConnect = React.useCallback(async() => {
    if (wallet.account) {
      setAccountModal(true);
      return;
    }

    setLoading(true);
    const provider: any = await detectEthereumProvider();
    setLoading(false);

    if (provider) {
      await provider.request({ method: 'eth_requestAccounts' });

      const chainId = await provider.request({
        method: 'eth_chainId'
      });

      $wallet.setState({
        ...provider._state,
        account: provider.selectedAddress,
        chainId
      });

      provider.on('accountsChanged', ([account]: string[]) => {
        $wallet.setState({
          ...$wallet.state,
          account
        });
      });
      provider.on('chainChanged', (chainId: string) => {
        $wallet.setState({
          ...$wallet.state,
          chainId
        });
      });
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
    <div>
      <AccountModal
        show={accountModal}
        onClose={() => setAccountModal(false)}
      />
      <button
        className={classNames(styles.container, {
          loading
        })}
        disabled={loading}
        onClick={hanldeConnect}
      >
        {buttonText}
      </button>
    </div>
  );
};
