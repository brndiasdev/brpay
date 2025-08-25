'use client';

import { motion } from 'framer-motion';
import { ImpactData } from '@/types';

interface ImpactSectionProps {
  data: ImpactData;
}

export default function ImpactSection({ data }: ImpactSectionProps) {
  const titleVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const pillVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, delay: 0.05 + i * 0.05 },
    }),
  };

  return (
    <section
      id="impacto"
      className="w-full py-20 md:py-24 px-6 md:px-12"
      style={{
        background:
          'linear-gradient(to top, var(--impacto-gradient-from), var(--impacto-gradient-to))',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center leading-tight"
          style={{ color: 'var(--impacto-text)' }}
        >
          {data.title}
        </motion.h2>

        {/* Descrição (opcional) */}
        {data.description && (
          <motion.p
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto"
            style={{ color: 'var(--impacto-desc)' }}
          >
            {data.description}
          </motion.p>
        )}

        {/* Faixa de KPIs em “pills” */}
        <div
          className="mt-10 md:mt-12 w-full rounded-2xl border overflow-hidden"
          style={{
            borderColor: 'color-mix(in oklab, var(--plans-border) 45%, transparent)',
            background:
              'linear-gradient(180deg, var(--impacto-gradient-from), var(--impacto-gradient-to))',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x"
               style={{ borderColor: 'color-mix(in oklab, var(--plans-border) 45%, transparent)' }}>
            {data.metrics.map((m, i) => (
              <motion.div
                key={`${m.label}-${i}`}
                custom={i}
                variants={pillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="p-6 md:p-8 text-center"
              >
                {/* Acento fino no topo de cada pill */}
                <div
                  className="mx-auto mb-4 h-[3px] w-16 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, var(--button-gradient-from), var(--button-gradient-to))',
                  }}
                />
                <div
                  className="text-4xl md:text-5xl font-extrabold leading-none"
                  style={{ color: 'var(--impacto-text)' }}
                >
                  {m.value}
                </div>
                <div
                  className="mt-2 text-sm md:text-[15px]"
                  style={{ color: 'var(--impacto-desc)' }}
                >
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nota curta opcional */}
        <div className="mt-8 flex items-center justify-center">
          <span
            className="text-xs md:text-sm font-semibold rounded-full px-3 py-1"
            style={{
              color: 'var(--secondary)',
              background: 'rgba(132,204,22,0.10)',
              border: '1px solid rgba(132,204,22,0.25)',
            }}
          >
            Dados auditáveis e atualizados em tempo real
          </span>
        </div>
      </div>
    </section>
  );
}
