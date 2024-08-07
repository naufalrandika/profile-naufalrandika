import React from 'react';
import { cn } from '@/lib/utils';

export const CardIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex h-10 w-10 items-center justify-center rounded-xl text-white', className)}
      {...props}
    >
      {children}
    </div>
  ),
);
CardIcon.displayName = 'CardIcon';