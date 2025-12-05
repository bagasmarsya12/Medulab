import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  // Effect to handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Close image viewer"
      >
        <X className="h-8 w-8" />
      </button>

      <div
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
      >
        <img
          src={imageUrl}
          alt="Enlarged view"
          className="object-contain w-auto h-auto max-w-full max-h-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

// Add some simple CSS animation if needed. We can use Tailwind for this.
// In your global CSS or a style tag in index.html:
// @keyframes fadeIn {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
// .animate-fade-in {
//   animation: fadeIn 0.2s ease-out;
// }
// However, since we don't have a global CSS file, we'll rely on simple transitions.
// A simple way is to manage opacity with state, but for now, let's keep it clean.
// The backdrop-blur provides a nice visual effect.
