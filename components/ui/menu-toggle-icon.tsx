'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface MenuToggleIconProps extends React.SVGProps<SVGSVGElement> {
  open: boolean;
  duration?: number;
}

export const MenuToggleIcon: React.FC<MenuToggleIconProps> = ({
  open,
  duration = 300,
  className,
  ...props
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('transition-all', className)}
      style={{ transitionDuration: `${duration}ms` }}
      {...props}
    >
      <line
        x1="4"
        y1={open ? '4' : '6'}
        x2="20"
        y2={open ? '20' : '6'}
        className="transition-all"
        style={{
          transitionDuration: `${duration}ms`,
          transformOrigin: 'center',
          transform: open ? 'rotate(45deg) translate(0px, 0px)' : 'none',
        }}
      />
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        className={cn('transition-all', open ? 'opacity-0 scale-0' : 'opacity-100 scale-100')}
        style={{ transitionDuration: `${duration}ms` }}
      />
      <line
        x1="4"
        y1={open ? '20' : '18'}
        x2="20"
        y2={open ? '4' : '18'}
        className="transition-all"
        style={{
          transitionDuration: `${duration}ms`,
          transformOrigin: 'center',
          transform: open ? 'rotate(-45deg) translate(0px, 0px)' : 'none',
        }}
      />
    </svg>
  );
};

export default MenuToggleIcon;
