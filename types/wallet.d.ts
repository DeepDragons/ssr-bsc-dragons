export interface WalletStore {
  accounts: string[];
  initialized: boolean;
  isConnected: boolean;
  isPermanentlyDisconnected: boolean;
  isUnlocked: boolean;
  chainId: string;
}
