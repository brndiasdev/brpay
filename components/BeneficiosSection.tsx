'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  LineChart,
  Lock,
  Banknote,
  PercentCircle
} from 'lucide-react';

/* ================================
 * Tipos de dados (opcional ajustar ao seu /types)
 * ================================ */
export type DiffItem = {
  icon: 'zap' | 'shield' | 'chart' | 'percent' | 'lock' | 'bank';
  title: string;
  description: string;
  pill?: string; // ex: "PIX D+0"
};
export type DiferenciaisData = {
  eyebrow?: string; // ex: "Por que BRPay?"
  title?: string;   // ex: "Diferenciais rápidos"
  items: DiffItem[];
};

export type BeneficioItem = {
  titulo: string;
  descricao: string;
};
export type BeneficiosData = {
  title: { text: string; highlight: string };
  items: BeneficioItem[];
};

/* ================================
 * Icon mapper para os diferenciais
 * ================================ */
function DiffIcon({ name, className }: { name: DiffItem['icon']; className?: string }) {
  const common = `w-6 h-6 md:w-7 md:h-7`;
  switch (name) {
    case 'zap':     return <Zap className={`${common} ${className || ''}`} />;
    case 'shield':  return <ShieldCheck className={`${common} ${className || ''}`} />;
    case 'chart':   return <LineChart className={`${common} ${className || ''}`} />;
    case 'percent': return <PercentCircle className={`${common} ${className || ''}`} />;
    case 'lock':    return <Lock className={`${common} ${className || ''}`} />;
    case 'bank':    return <Banknote className={`${common} ${className || ''}`} />;
  }
}

/* ================================
 * DIFERENCIAIS RÁPIDOS (novo)
 * ================================ */
export function DiferenciaisRapidos({ data }: { data: DiferenciaisData }) {
  const titleVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: 0.1 + i * 0.06 },
    }),
  };

  return (
    <section
      id="diferenciais"
      className="w-full py-18 md:py-20 px-4 md:px-8 overflow-x-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--hero-gradient-from) 85%, transparent), color-mix(in oklab, var(--hero-gradient-to) 85%, transparent))',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow/Pill */}
        {data.eyebrow && (
          <div
            className="mx-auto w-fit mb-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
            style={{
              color: 'var(--primary)',
              background: 'rgba(5,150,105,0.08)',
              border: '1px solid rgba(5,150,105,0.18)',
            }}
          >
            {data.eyebrow}
          </div>
        )}

        {/* Título */}
        {data.title && (
          <motion.h3
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            {data.title}
          </motion.h3>
        )}

        {/* Sub linha gradiente viva */}
        <div
          className="mx-auto mt-3 mb-10 h-[5px] w-24 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, var(--button-gradient-from), var(--button-gradient-to), var(--button-gradient-from))',
          }}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {data.items.map((item, i) => (
            <motion.div
              key={`${item.title}-${i}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl p-5 md:p-6 transition-transform hover:scale-[1.02]"
              style={{
                background:
                  'linear-gradient(180deg, var(--beneficios-card-from), var(--beneficios-card-to))',
                border: '1px solid var(--beneficios-border)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}
            >
              {/* Borda animada sutil */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(16,185,129,0.18), transparent)',
                  maskImage:
                    'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMask:
                    'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: 1,
                  opacity: 0.6,
                }}
              />

              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full shadow-sm"
                  style={{
                    background:
                      'linear-gradient(180deg, var(--button-gradient-from), var(--button-gradient-to))',
                    boxShadow: '0 6px 14px rgba(5,150,105,0.25)',
                  }}
                >
                  <DiffIcon name={item.icon} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4
                      className="text-lg md:text-xl font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </h4>

                    {item.pill && (
                      <span
                        className="text-[11px] md:text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          color: 'var(--secondary)',
                          border: '1px solid rgba(132,204,22,0.35)',
                          background: 'rgba(132,204,22,0.12)',
                        }}
                      >
                        {item.pill}
                      </span>
                    )}
                  </div>

                  <p
                    className="mt-1.5 text-sm md:text-[15px] leading-relaxed"
                    style={{ color: 'var(--beneficios-desc)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

