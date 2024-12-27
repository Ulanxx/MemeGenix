import { createConfig } from 'wagmi';
import { w3mConnectors } from '@web3modal/ethereum';
import { chains, publicClient } from './provider';
import { web3modalConfig } from './web3modal';

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ 
    projectId: web3modalConfig.projectId, 
    chains 
  }),
  publicClient,
});