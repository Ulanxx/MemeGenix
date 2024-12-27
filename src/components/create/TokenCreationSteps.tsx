import { useLocation, Link } from 'react-router-dom';
import { Palette, Settings, Rocket } from 'lucide-react';
import { useLanguage } from '../../i18n/context';

export function TokenCreationSteps() {
  const { t } = useLanguage();
  const location = useLocation();
  
  const steps = [
    { path: '/create/design', icon: Palette, label: t.howItWorks.steps.design.title },
    { path: '/create/parameters', icon: Settings, label: t.howItWorks.steps.parameters.title },
    { path: '/create/review', icon: Rocket, label: t.howItWorks.steps.launch.title },
  ];

  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-lg bg-purple-100 p-1">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = location.pathname === step.path;
          const isCompleted = steps.findIndex(s => s.path === location.pathname) > index;
          
          return (
            <Link
              key={step.path}
              to={step.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition ${
                isActive
                  ? 'bg-white shadow-sm text-purple-600'
                  : isCompleted
                  ? 'text-purple-600'
                  : 'text-purple-400'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{step.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}