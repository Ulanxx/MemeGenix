import { configureChains } from 'wagmi';
import { w3mProvider } from '@web3modal/ethereum';
import { supportedChains } from './chains';
import { web3modalConfig } from './web3modal';

export const { chains, publicClient } = configureChains(
  supportedChains,
  [w3mProvider({ projectId: web3modalConfig.projectId })]
);