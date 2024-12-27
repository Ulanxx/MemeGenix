import { Coins, Twitter, Github, MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n/context';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-cyber-dark relative overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7B61FF08_1px,transparent_1px),linear-gradient(to_bottom,#7B61FF08_1px,transparent_1px)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#7B61FF15_0,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-cyber-primary/20 rounded-full blur-md group-hover:bg-cyber-primary/30 transition-all duration-300" />
                <Coins className="h-8 w-8 text-cyber-primary relative" />
              </div>
              <span className="text-xl font-pixel text-cyber-text">MemeForge</span>
            </div>
            <p className="font-tech text-cyber-text/60">{t.hero.subtitle}</p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-pixel text-cyber-text mb-6">{t.footer.product.title}</h3>
            <ul className="space-y-4">
              {[
                { href: '#features', label: t.footer.product.features },
                { href: '#how-it-works', label: t.footer.product.howItWorks },
                { href: '#pricing', label: t.footer.product.pricing }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="font-tech text-cyber-text/60 hover:text-cyber-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-pixel text-cyber-text mb-6">{t.footer.resources.title}</h3>
            <ul className="space-y-4">
              {[
                { href: '#', label: t.footer.resources.docs },
                { href: '#', label: t.footer.resources.api },
                { href: '#', label: t.footer.resources.blog }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="font-tech text-cyber-text/60 hover:text-cyber-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-pixel text-cyber-text mb-6">{t.footer.connect.title}</h3>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
                { icon: MessageSquare, href: '#' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-cyber-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-2 text-cyber-text/60 hover:text-cyber-primary transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-cyber-primary/20 text-center">
          <p className="font-tech text-cyber-text/40">
            &copy; {new Date().getFullYear()} MemeForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}