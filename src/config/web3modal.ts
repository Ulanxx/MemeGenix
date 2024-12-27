import { EthereumClient } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { wagmiConfig } from './wagmi';
import { chains } from './provider';

export const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const web3modalConfig = {
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  themeMode: 'light' as const,
  themeVariables: {
    '--w3m-font-family': 'inherit',
    '--w3m-accent-color': '#9333ea',
    '--w3m-background-color': '#9333ea',
  },
};