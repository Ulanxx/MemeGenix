import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: 'primary' | 'secondary' | 'accent' | 'highlight';
}

export function FeatureCard({ icon, title, description, color = 'primary' }: FeatureCardProps) {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 bg-cyber-${color}/10 rounded-xl blur-md 
                      group-hover:bg-cyber-${color}/20 transition-all duration-300`} />
      <div className="relative bg-cyber-dark/50 backdrop-blur-xl rounded-xl p-8 
                    border border-cyber-primary/20 h-full">
        <div className={`inline-flex p-3 rounded-lg mb-4 text-cyber-${color}
                      transform group-hover:scale-110 group-hover:translate-y-[-4px]
                      transition-all duration-300 ease-out
                      shadow-[0_0_10px_rgba(123,97,255,0.2)]
                      group-hover:shadow-[0_0_20px_rgba(123,97,255,0.4)]`}>
          {React.cloneElement(icon as React.ReactElement, { className: 'h-8 w-8' })}
        </div>
        <h3 className="text-2xl font-pixel mb-4 text-cyber-text">
          {title}
        </h3>
        <p className="font-tech text-cyber-text/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}