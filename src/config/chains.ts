import { mainnet, polygon } from 'wagmi/chains';

export const supportedChains = [mainnet, polygon] as const;

export type SupportedChain = (typeof supportedChains)[number];