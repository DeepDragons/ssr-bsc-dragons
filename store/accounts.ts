import type { WalletStore } from '@/types';

import { Store } from 'react-stores';

const init: WalletStore = {
  accounts: [],
  initialized: false,
  isConnected: false,
  isPermanentlyDisconnected: false,
  isUnlocked: false,
  chainId: '0x38'
};
export const $wallet = new Store<WalletStore>(init);
