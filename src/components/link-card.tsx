'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FADE_UP_ANIMATION_VARIANTS } from './animation';

interface LinkCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const LinkCard = React.forwardRef<HTMLAnchorElement, LinkCardProps>(
  ({ className, children, href }, ref) => (
    <motion.a
      ref={ref}
      className={cn('rounded-xl border bg-card text-card-foreground shadow', className)}
      href={href}
      target='_blank'
      rel='noreferrer'
      variants={FADE_UP_ANIMATION_VARIANTS}
    >
      {children}
    </motion.a>
  ),
);
LinkCard.displayName = 'LinkCard'; // Corrected displayName

export { LinkCard };