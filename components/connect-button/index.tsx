import styles from "./index.module.scss";

import Web3 from "web3";
import classNames from "classnames";
import detectEthereumProvider from '@metamask/detect-provider';
import React from "react";
import { useStore } from "react-stores";
import { useTranslation } from "next-i18next";
import { $wallet } from "@/store/accounts";
import { trim } from "@/filters/trim";
import { AccountModal } from "@/modals/account";
import { Contracts } from "@/config/contracts";


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

      const web3 = new Web3(provider);
      const token = new web3.eth.Contract([
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ], Contracts.Mutagen);

      // const balance = await token.methods.balanceOf(wallet.account).call()

      console.log(token);
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
