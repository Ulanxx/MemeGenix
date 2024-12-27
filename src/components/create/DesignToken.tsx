import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '../ui/FormInput';
import { useLanguage } from '../../i18n/context';

export function DesignToken() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/create/parameters');
  };

  const generateName = () => {
    // AI name generation logic here
  };

  const generateSymbol = () => {
    // AI symbol generation logic here
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Your Token</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Token Name"
            value={name}
            onChange={setName}
            placeholder="e.g., Doge Coin"
            onAIGenerate={generateName}
          />

          <FormInput
            label="Token Symbol"
            value={symbol}
            onChange={setSymbol}
            placeholder="e.g., DOGE"
            onAIGenerate={generateSymbol}
          />

          <FormInput
            label="Description"
            value={description}
            onChange={setDescription}
            placeholder="Describe your token's purpose and vision..."
            multiline
          />

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 focus:ring focus:ring-purple-200 transition-all duration-200"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}