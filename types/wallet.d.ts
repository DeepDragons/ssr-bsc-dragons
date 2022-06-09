export interface WalletStore {
  account?: string;
  initialized: boolean;
  isConnected: boolean;
  isPermanentlyDisconnected: boolean;
  isUnlocked: boolean;
  chainId: string;
}
