import React from 'react';
import { Bot, Palette, Rocket, Shield, Coins, Users } from 'lucide-react';
import { FeatureCard } from './ui/FeatureCard';
import { useLanguage } from '../i18n/context';

export function Features() {
  const { t } = useLanguage();

  const features = Object.entries(t.features.items).map(([key, item], index) => ({
    icon: getIconForFeature(key),
    title: item.title,
    description: item.description,
    color: getColorForIndex(index)
  }));

  return (
    <section id="features" className="py-32 bg-cyber-dark relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7B61FF10_0,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-pixel mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary">
            {t.features.title}
          </h2>
          <p className="text-2xl font-tech text-cyber-text/80 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={React.createElement(feature.icon)}
              title={feature.title}
              description={feature.description} 
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function getIconForFeature(key: string) {
  const icons = {
    aiName: Bot,
    logoDesigner: Palette,
    smartContracts: Rocket,
    security: Shield,
    tokenomics: Coins,
    communityTools: Users,
  };
  return icons[key as keyof typeof icons];
}

function getColorForIndex(index: number) {
  const colors: ('primary' | 'secondary' | 'accent' | 'highlight')[] = 
    ['primary', 'secondary', 'accent', 'highlight', 'primary', 'secondary'];
  return colors[index];
}