import { PenTool, Rocket, Users, Coins } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import React from 'react';

export function HowItWorks() {
  const { t } = useLanguage();
  const steps = [
    {
      icon: <PenTool />,
      title: t.howItWorks.steps.design.title,
      description: t.howItWorks.steps.design.description,
      color: 'secondary'
    },
    {
      icon: <Coins />,
      title: t.howItWorks.steps.parameters.title,
      description: t.howItWorks.steps.parameters.description,
      color: 'primary'
    },
    {
      icon: <Rocket />,
      title: t.howItWorks.steps.launch.title,
      description: t.howItWorks.steps.launch.description,
      color: 'highlight'
    },
    {
      icon: <Users />,
      title: t.howItWorks.steps.community.title,
      description: t.howItWorks.steps.community.description,
      color: 'accent'
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-cyber-dark relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#7B61FF08_1px,transparent_1px)] bg-[length:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7B61FF10_0,transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-pixel mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary">
            {t.howItWorks.title}
          </h2>
          <p className="text-2xl font-tech text-cyber-text/80 max-w-3xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-cyber-${step.color}/20 rounded-xl blur-md 
                            group-hover:bg-cyber-${step.color}/20 transition-all duration-300`} />
              
              <div className="relative bg-cyber-dark/50 backdrop-blur-xl rounded-xl p-8 
                           border border-cyber-primary/20 h-full">
                <div className={`absolute -top-4 -left-4 w-8 h-8 text-cyber-${step.color}
                              rounded-full flex items-center justify-center font-pixel text-sm
                              transform group-hover:scale-125 group-hover:rotate-[360deg]
                              transition-all duration-500 ease-out
                              shadow-[0_0_10px_rgba(123,97,255,0.3)]
                              group-hover:shadow-[0_0_20px_rgba(123,97,255,0.5)]
                              z-10`}>
                  {index + 1}
                </div>
                
                <div className={`inline-flex p-3 rounded-lg mb-4 text-cyber-${step.color}
                              transform group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(step.icon as React.ReactElement, { 
                    className: 'h-8 w-8 transform group-hover:rotate-[360deg] transition-transform duration-500' 
                  })}
                </div>
                
                <h3 className={`text-2xl font-pixel mb-4 text-cyber-text
                              group-hover:text-cyber-${step.color} transition-colors duration-300`}>
                  {step.title}
                </h3>
                <p className="font-tech text-cyber-text/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}