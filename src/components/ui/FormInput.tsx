import { Wand2 } from 'lucide-react';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onAIGenerate?: () => void;
  multiline?: boolean;
}

export function FormInput({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  onAIGenerate,
  multiline 
}: FormInputProps) {
  const inputClasses = "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200 transition-all duration-200";
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${inputClasses} min-h-[120px] resize-none`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={inputClasses}
            placeholder={placeholder}
          />
        )}
        {onAIGenerate && (
          <button
            type="button"
            onClick={onAIGenerate}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-colors"
          >
            <Wand2 className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}