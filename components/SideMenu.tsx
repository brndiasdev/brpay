'use client';
/*eslint-disable */
import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { headerData } from '@/data/header';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50'
          style={{
            background: 'var(--background)',
          }}
        >
          {/* Menu Content */}
          <div className='h-full w-full flex flex-col items-center justify-center'>
            <nav className='flex flex-col items-center gap-8'>
              {/*
              {headerData.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-3xl font-semibold hover:opacity-80 transition-opacity"
                  style={{
                    background: `linear-gradient(to right, ${item.gradient})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {item.text}
                </Link>
              ))} */}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
