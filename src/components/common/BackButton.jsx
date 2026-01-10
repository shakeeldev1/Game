import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 px-3 py-2 bg-[var(--color-neon-primary)] text-[var(--color-neon-bg)] rounded-lg hover:bg-[var(--color-neon-accent)] transition-colors"
    >
      <FaArrowLeft size={16} />
      Back
    </button>
  );
};

export default BackButton;