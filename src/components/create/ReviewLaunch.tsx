import { useNavigate } from 'react-router-dom';
import { Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../i18n/context';

export function ReviewLaunch() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLaunch = () => {
    // Launch token logic here
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Token Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">Sample Token</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Symbol</p>
              <p className="font-medium">SMPL</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Supply</p>
              <p className="font-medium">1,000,000</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Initial Liquidity</p>
              <p className="font-medium">50%</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Security Checks</h3>
          <div className="space-y-2">
            <div className="flex items-center text-green-600">
              <Check className="h-5 w-5 mr-2" />
              <span>Contract verified</span>
            </div>
            <div className="flex items-center text-green-600">
              <Check className="h-5 w-5 mr-2" />
              <span>Ownership renounced</span>
            </div>
            <div className="flex items-center text-yellow-600">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>Liquidity lock pending</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/create/parameters')}
            className="text-purple-600 px-6 py-2 rounded-md hover:bg-purple-50 transition"
          >
            Back
          </button>
          <button
            onClick={handleLaunch}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Launch Token
          </button>
        </div>
      </div>
    </div>
  );
}