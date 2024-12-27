import { Routes, Route, Navigate } from 'react-router-dom';
import { TokenCreationSteps } from '../components/create/TokenCreationSteps';
import { DesignToken } from '../components/create/DesignToken';
import { SetParameters } from '../components/create/SetParameters';
import { ReviewLaunch } from '../components/create/ReviewLaunch';

export function CreateTokenPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TokenCreationSteps />
      <div className="mt-8">
        <Routes>
          <Route path="/" element={<Navigate to="design" replace />} />
          <Route path="design" element={<DesignToken />} />
          <Route path="parameters" element={<SetParameters />} />
          <Route path="review" element={<ReviewLaunch />} />
        </Routes>
      </div>
    </div>
  );
}