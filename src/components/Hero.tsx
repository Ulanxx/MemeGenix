import { Link } from 'react-router-dom';
import { Sparkles, Rocket, Shield } from 'lucide-react';
import { useLanguage } from '../i18n/context';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-cyber-dark min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7B61FF10_1px,transparent_1px),linear-gradient(to_bottom,#7B61FF10_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-pixel mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary animate-glow">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-tech mb-12 text-cyber-text/90">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/create"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-cyber-primary/20 rounded-lg blur-xl group-hover:bg-cyber-primary/30 transition-all duration-300" />
              <button className="relative px-8 py-4 bg-cyber-dark border-2 border-cyber-primary text-cyber-primary font-pixel text-lg rounded-lg
                               hover:bg-cyber-primary/10 transition-all duration-300 flex items-center gap-3">
                <Rocket className="h-6 w-6" />
                {t.hero.startCreating}
              </button>
            </Link>
            <a
              href="#features"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-cyber-secondary/20 rounded-lg blur-xl group-hover:bg-cyber-secondary/30 transition-all duration-300" />
              <button className="relative px-8 py-4 bg-cyber-dark border-2 border-cyber-secondary text-cyber-secondary font-pixel text-lg rounded-lg
                               hover:bg-cyber-secondary/10 transition-all duration-300 flex items-center gap-3">
                <Shield className="h-6 w-6" />
                {t.hero.learnMore}
              </button>
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Sparkles className="h-8 w-8" />,
              title: t.hero.features.aiPowered.title,
              description: t.hero.features.aiPowered.description,
              color: 'cyber-primary'
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              title: t.hero.features.oneClick.title,
              description: t.hero.features.oneClick.description,
              color: 'cyber-accent'
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: t.hero.features.secure.title,
              description: t.hero.features.secure.description,
              color: 'cyber-secondary'
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-${feature.color}/10 rounded-xl blur-md group-hover:bg-${feature.color}/20 transition-all duration-300`} />
              <div className="relative bg-cyber-dark/50 backdrop-blur-xl rounded-xl p-8 border border-cyber-primary/20">
                <div className={`inline-flex p-3 rounded-lg mb-4 text-${feature.color} 
                              bg-${feature.color}/5 group-hover:bg-${feature.color}/10
                              transform group-hover:scale-110 group-hover:translate-y-[-4px]
                              transition-all duration-300 ease-out
                              shadow-[0_0_10px_rgba(123,97,255,0.2)]
                              group-hover:shadow-[0_0_20px_rgba(123,97,255,0.4)]`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-pixel mb-3 text-cyber-text">
                  {feature.title}
                </h3>
                <p className="font-tech text-cyber-text/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}