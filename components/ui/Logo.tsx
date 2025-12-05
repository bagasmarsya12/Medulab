import React from 'react';

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-8 w-8", 
  textClassName = "text-xl",
  showText = true 
}) => {
  return (
    <div className="flex items-center gap-2.5">
      {/* Recreated SVG based on the Medulab logo image provided */}
      <svg 
        className={className} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main shape - Rounded Hexagon/Cube style */}
        <path 
          d="M50 5 L85 25 V65 L50 85 L15 65 V25 L50 5 Z" 
          className="fill-teal-600" 
        />
        {/* Abstract white lines creating the 'Y' / Person shape inside */}
        <path 
          d="M50 50 V85 M50 50 L15 25 M50 50 L85 25" 
          stroke="white" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle cx="50" cy="50" r="10" className="fill-teal-600" />
      </svg>
      
      {showText && (
        <span className={`font-bold tracking-tight text-slate-800 ${textClassName}`}>
          MEDULAB
        </span>
      )}
    </div>
  );
};