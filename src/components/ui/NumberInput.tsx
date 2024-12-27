
interface NumberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  suffix?: string;
  min?: number;
  max?: number;
}

export function NumberInput({
  label,
  value,
  onChange,
  placeholder,
  suffix,
  min,
  max
}: NumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === '' || /^\d*\.?\d*$/.test(newValue)) {
      if (min !== undefined && Number(newValue) < min) return;
      if (max !== undefined && Number(newValue) > max) return;
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200 transition-all duration-200"
          placeholder={placeholder}
        />
        {suffix && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
}