'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { FaqData } from '@/types';
import PrimaryButton from './ui/PrimaryButton';

interface FaqSectionProps {
  data: FaqData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function FaqSection({ data }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id='faq'
      className='w-full bg-[var(--faq-bg)] py-24 px-4 md:px-8 overflow-x-hidden'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.3 }}
        className='max-w-4xl mx-auto'
      >
        <motion.h2
          variants={titleVariants}
          className='text-4xl font-extrabold text-center mb-14 leading-tight'
        >
          <span className='bg-gradient-to-r from-[var(--button-gradient-from)] via-[var(--button-gradient-to)] to-[var(--button-gradient-from)] bg-clip-text text-transparent'>
            {data.title}
          </span>
        </motion.h2>

        <motion.div variants={containerVariants} className='space-y-6'>
          {data.items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className='border border-[var(--faq-border)] rounded-2xl shadow-md overflow-hidden bg-[var(--faq-card-bg)]'
              >
                <button
                  onClick={() => toggle(index)}
                  className='w-full flex justify-between items-center px-6 py-5 text-left transition hover:bg-[var(--faq-hover)]'
                >
                  <span className='flex items-center gap-3 text-lg font-medium text-[var(--faq-text)]'>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <FaChevronDown className='text-[var(--faq-icon)]' />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0 }}
                  className='overflow-hidden px-6 text-[var(--faq-desc)] text-base'
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2, delay: isOpen ? 0.1 : 0 }}
                    className='py-4'
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* added whatsapp button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className='mt-14 text-center'
      >
        <PrimaryButton
          href='https://wa.me/5511993744001'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-2 mx-auto mt-10 w-full max-w-xs'
        >
          <FaWhatsapp className='text-xl' />
          <span className='text-sm md:text-base'>
            Fale com a gente no WhatsApp
          </span>
        </PrimaryButton>
      </motion.div>
    </section>
  );
}
