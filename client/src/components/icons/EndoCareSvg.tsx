import { FC } from 'react';

interface EndoCareSvgProps {
  className?: string;
  width?: number;
  height?: number;
}

const EndoCareSvg: FC<EndoCareSvgProps> = ({ className, width = 400, height = 300 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gentle background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(220, 80%, 50%)', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(220, 80%, 50%)', stopOpacity: 0.05 }} />
        </linearGradient>
        
        {/* Soft glow effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="400" height="300" fill="url(#bgGradient)" rx="20" />

      {/* Abstract tooth shape */}
      <path
        d="M200 80 
           C240 80, 280 120, 280 170
           C280 220, 240 260, 200 260
           C160 260, 120 220, 120 170
           C120 120, 160 80, 200 80
           Z"
        fill="none"
        stroke="hsl(220, 80%, 50%)"
        strokeWidth="2"
        opacity="0.8"
      />

      {/* Protective shield element */}
      <path
        d="M200 60
           C260 60, 300 120, 300 180
           C240 180, 200 140, 200 140
           C200 140, 160 180, 100 180
           C100 120, 140 60, 200 60
           Z"
        fill="none"
        stroke="hsl(220, 80%, 50%)"
        strokeWidth="2"
        opacity="0.6"
        filter="url(#glow)"
      />

      {/* Healing cross symbol */}
      <g transform="translate(185, 155)" opacity="0.7">
        <rect x="-3" y="-15" width="6" height="30" rx="2" fill="hsl(220, 80%, 50%)" />
        <rect x="-15" y="-3" width="30" height="6" rx="2" fill="hsl(220, 80%, 50%)" />
      </g>

      {/* Flowing lines representing care */}
      <path
        d="M160 200 C180 180, 220 180, 240 200"
        fill="none"
        stroke="hsl(220, 80%, 50%)"
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  );
};

export default EndoCareSvg;
