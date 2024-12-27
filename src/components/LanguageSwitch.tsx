import { useLanguage } from '../i18n/context';
import { Languages } from 'lucide-react';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className="group relative inline-flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-cyber-primary/20 rounded-lg blur-xl group-hover:bg-cyber-primary/30 transition-all duration-300" />
      <div className="relative px-4 py-2 bg-cyber-dark border border-cyber-primary text-cyber-primary font-pixel text-sm rounded-lg
                     hover:bg-cyber-primary/10 hover:scale-105 transition-all duration-300 flex items-center gap-2
                     shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        <Languages className="h-5 w-5" />
        <span className="group-hover:tracking-wider transition-all duration-300">
          {language === 'en' ? '中文' : 'English'}
        </span>
      </div>
    </button>
  );
}