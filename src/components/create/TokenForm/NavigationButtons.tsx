import { useNavigate } from 'react-router-dom';

interface NavigationButtonsProps {
  backPath: string;
  onNext?: () => void;
  nextLabel?: string;
}

export function NavigationButtons({ backPath, onNext, nextLabel = 'Next Step' }: NavigationButtonsProps) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end space-x-4">
      <button
        type="button"
        onClick={() => navigate(backPath)}
        className="text-purple-600 px-6 py-2 rounded-md hover:bg-purple-50 transition"
      >
        Back
      </button>
      <button
        type={onNext ? 'button' : 'submit'}
        onClick={onNext}
        className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
      >
        {nextLabel}
      </button>
    </div>
  );
}