import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';
import { WalletButton } from './WalletButton';
import { useLanguage } from '../i18n/context';
import { LanguageSwitch } from './LanguageSwitch';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-lg border-b border-cyber-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-primary/20 rounded-full blur-md group-hover:bg-cyber-primary/30 transition-all duration-300" />
              <Coins className="h-8 w-8 text-cyber-primary relative" />
            </div>
            <span className="text-xl font-pixel text-cyber-text">MemeForge</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '#features', label: t.header.features },
              { href: '#how-it-works', label: t.header.howItWorks },
              { href: '#community', label: t.header.community }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-tech text-lg text-cyber-text/80 hover:text-cyber-primary transition-colors relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyber-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>


          {/* Wallet Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitch />
            <div className="w-px h-8 bg-cyber-primary/20" />
            <WalletButton />
          </div>
        </div>
      </div>
    </header>
  );
}