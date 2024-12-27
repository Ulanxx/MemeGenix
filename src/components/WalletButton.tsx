import { Wallet } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import { useLanguage } from '../i18n/context';

export function WalletButton() {
  const { isConnected, address, formatAddress, connect, disconnect } = useWallet();
  const { t } = useLanguage();

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group relative inline-flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-cyber-secondary/20 rounded-lg blur-xl group-hover:bg-cyber-secondary/30 transition-all duration-300" />
      <div className="relative px-6 py-2 bg-cyber-dark border-2 border-cyber-secondary text-cyber-secondary font-pixel text-sm rounded-lg
                     hover:bg-cyber-secondary/10 transition-all duration-300 flex items-center gap-2">
        <Wallet className="h-5 w-5" />
        {isConnected ? formatAddress(address!) : t.wallet.connect}
      </div>
    </button>
  );
}