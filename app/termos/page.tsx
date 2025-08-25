'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { termos, privacidade, cookies } from '@/data/terms';
import { TermsSection } from '@/types';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

const tabs = {
  termos: {
    label: 'Termos de Uso',
    data: termos,
  },
  privacidade: {
    label: 'Política de Privacidade',
    data: privacidade,
  },
  cookies: {
    label: 'Política de Cookies',
    data: cookies,
  },
};

export default function TermosPage() {
  const [activeTab, setActiveTab] = useState<
    'termos' | 'privacidade' | 'cookies'
  >('termos');
  const current = tabs[activeTab];

  return (
    <section
      className='w-full min-h-screen px-4 md:px-8 pt-28 pb-10'
      style={{
        background: 'var(--beneficios-bg)',
      }}
    >
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-10'>
        <div className='h-fit flex flex-col gap-6 items-center'>
          {/* Sidebar integrada */}
          <aside
            className='w-full h-fit md:p-6 rounded-xl md:w-64 shrink-0 flex flex-col justify-between gap-6'
            style={{
              border: '1px solid var(--beneficios-border)',
              background:
                'linear-gradient(to bottom right, var(--beneficios-card-from), var(--beneficios-card-to))',
            }}
          >
            <ul className='space-y-3'>
              {Object.entries(tabs).map(([key, { label }]) => (
                <li key={key}>
                  <button
                    onClick={() =>
                      setActiveTab(key as 'termos' | 'privacidade' | 'cookies')
                    }
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      activeTab === key
                        ? 'bg-[var(--terms-badge-bg)] text-[var(--beneficios-text)] font-bold'
                        : ' text-[--beneficios-desc] hover:bg-[var(--terms-button-hover)]'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <Link
            href='/'
            className='mt-auto w-full rounded-xl px-6 py-3 font-semibold flex items-center justify-center gap-2 transition cursor-pointer
              bg-white text-[var(--plans-button-text)] border border-[var(--plans-button-text)] hover:bg-[var(--plans-button-hover)]'
          >
            <FiArrowLeft />
            Voltar para o ínicio
          </Link>
        </div>

        {/* Conteúdo dinâmico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex-1  rounded-2xl p-6 md:p-8 shadow-md'
          style={{
            border: '1px solid var(--beneficios-border)',
            background:
              'linear-gradient(to bottom right, var(--beneficios-card-from), var(--beneficios-card-to))',
          }}
        >
          <h1 className='text-3xl font-bold text-[--text-primary] mb-6'>
            {current.label}
          </h1>

          {current.data.map((section: TermsSection, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className='mb-6'
            >
              <h2 className='text-xl font-semibold text-[--text-secondary] mb-2'>
                {section.title}
              </h2>
              <p className='text-sm text-[--text-secondary] leading-relaxed whitespace-pre-line'>
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
