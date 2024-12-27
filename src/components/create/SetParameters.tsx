import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NumberInput } from '../ui/NumberInput';
import { useLanguage } from '../../i18n/context';

export function SetParameters() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [totalSupply, setTotalSupply] = useState('1000000');
  const [liquidityPool, setLiquidityPool] = useState('50');
  const [taxFee, setTaxFee] = useState('2');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/create/review');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Set Token Parameters</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <NumberInput
            label="Total Supply"
            value={totalSupply}
            onChange={setTotalSupply}
            placeholder="e.g., 1,000,000"
            min={0}
          />

          <NumberInput
            label="Initial Liquidity Pool"
            value={liquidityPool}
            onChange={setLiquidityPool}
            placeholder="e.g., 50"
            suffix="%"
            min={0}
            max={100}
          />

          <NumberInput
            label="Transaction Tax"
            value={taxFee}
            onChange={setTaxFee}
            placeholder="e.g., 2"
            suffix="%"
            min={0}
            max={100}
          />

          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={() => navigate('/create/design')}
              className="text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200"
            >
              Back
            </button>
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