
interface TokenInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}

export function TokenInput({ label, value, onChange, placeholder, type = 'text' }: TokenInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}