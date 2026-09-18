import React from 'react';

export default function SilverPerimeter() {
  return (
    <svg className="perimeter-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8E8E8E" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#8E8E8E" />
        </linearGradient>
      </defs>
      <rect
        className="perimeter-rect"
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="2"
      />
    </svg>
  );
}
