import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { getEnvConfig, isDev } from '../utils/env'

// 1. 获取环境配置
const { WALLET_CONNECT_PROJECT_ID } = getEnvConfig()

// 2. 根据环境选择链
const chains = isDev() ? [sepolia] : [mainnet, sepolia]

// 3. 创建 wagmi config
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: window.location.origin,
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId: WALLET_CONNECT_PROJECT_ID,
  metadata
})

// 4. 创建 modal
createWeb3Modal({
  wagmiConfig,
  projectId: WALLET_CONNECT_PROJECT_ID,
  chains
})

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}