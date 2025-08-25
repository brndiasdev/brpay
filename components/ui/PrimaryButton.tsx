'use client';

import { motion } from 'framer-motion';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  [key: string]: unknown;
}

export default function PrimaryButton({
  children,
  onClick,
  className = '',
  href,
  ...props
}: PrimaryButtonProps) {
  const commonClasses = `bg-gradient-to-r from-[var(--button-gradient-from)] to-[var(--button-gradient-to)] hover:bg-[var(--button-hover)] text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg ${className} cursor-pointer`;

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className={commonClasses}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={commonClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
} 