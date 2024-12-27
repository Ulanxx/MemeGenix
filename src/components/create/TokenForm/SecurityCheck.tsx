import { Check, AlertCircle } from 'lucide-react';

interface SecurityCheckProps {
  status: 'success' | 'warning' | 'error';
  message: string;
}

export function SecurityCheck({ status, message }: SecurityCheckProps) {
  const Icon = status === 'success' ? Check : AlertCircle;
  const colorClass = {
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  }[status];

  return (
    <div className={`flex items-center ${colorClass}`}>
      <Icon className="h-5 w-5 mr-2" />
      <span>{message}</span>
    </div>
  );
}