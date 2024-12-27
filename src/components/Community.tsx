import { MessageCircle, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import React from 'react';

export function Community() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <MessageCircle />,
      title: t.community.features.forums.title,
      description: t.community.features.forums.description,
      color: 'primary'
    },
    {
      icon: <Users />,
      title: t.community.features.network.title,
      description: t.community.features.network.description,
      color: 'secondary'
    },
    {
      icon: <TrendingUp />,
      title: t.community.features.insights.title,
      description: t.community.features.insights.description,
      color: 'accent'
    }
  ];

  return (
    <section id="community" className="py-32 bg-cyber-dark relative overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7B61FF08_1px,transparent_1px),linear-gradient(to_bottom,#7B61FF08_1px,transparent_1px)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#7B61FF15_0,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#FF61DC15_0,transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-pixel mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary">
            {t.community.title}
          </h2>
          <p className="text-2xl font-tech text-cyber-text/80 max-w-3xl mx-auto">
            {t.community.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* 发光背景 */}
              <div className={`absolute inset-0 bg-cyber-${feature.color}/10 rounded-xl blur-md 
                            group-hover:bg-cyber-${feature.color}/20 transition-all duration-300`} />
              
              {/* 卡片内容 */}
              <div className="relative bg-cyber-dark/50 backdrop-blur-xl rounded-xl p-8 
                           border border-cyber-primary/20 h-full">
                {/* 图标 */}
                <div className={`inline-flex p-4 rounded-lg mb-6 text-cyber-${feature.color}
                              bg-cyber-${feature.color}/5 group-hover:bg-cyber-${feature.color}/10
                              transform group-hover:scale-110 group-hover:translate-y-[-4px]
                              transition-all duration-300 ease-out
                              shadow-[0_0_10px_rgba(123,97,255,0.2)]
                              group-hover:shadow-[0_0_20px_rgba(123,97,255,0.4)]`}>
                  {React.cloneElement(feature.icon as React.ReactElement, { className: 'h-10 w-10' })}
                </div>
                
                {/* 文本内容 */}
                <h3 className="text-2xl font-pixel mb-4 text-cyber-text group-hover:text-cyber-${feature.color} transition-colors">
                  {feature.title}
                </h3>
                <p className="font-tech text-cyber-text/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}