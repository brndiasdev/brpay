'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HowWorksData } from '@/types';
import { Cog, Rocket, CreditCard, CheckCircle2, Quote } from 'lucide-react';

interface HowWorksSectionProps {
  data: HowWorksData;
}

const iconMap = {
  'cogs': Cog,
  'rocket': Rocket,
  'credit-card': CreditCard,
} as const;

export default function HowWorksSection({ data }: HowWorksSectionProps) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const steps = data?.steps ?? [];

  // ativa passo conforme interseção no viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) {
          const idx = Number((vis[0].target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      { root: null, rootMargin: '-20% 0px -60% 0px', threshold: [0.2, 0.4, 0.6, 0.8] }
    );

    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);

  // navegação por teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, steps.length - 1));
        stepRefs.current[Math.min(active + 1, steps.length - 1)]?.focus();
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
        stepRefs.current[Math.max(active - 1, 0)]?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, steps.length]);

  const progress = useMemo(() => {
    if (!steps.length) return 0;
    return ((active + 1) / steps.length) * 100;
  }, [active, steps.length]);

  return (
    <section
      id="how-works"
      className="relative w-full py-24 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--how-works-bg)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho + barra de progresso */}
        <header className="mb-10 md:mb-14">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: 'var(--how-works-text)' }}
            >
              {data?.title ?? 'Como funciona'}
            </h3>
            <div className="text-sm font-semibold" style={{ color: 'var(--how-works-desc)' }}>
              Etapa {active + 1} de {steps.length}
            </div>
          </div>
          <div
            className="mt-3 h-2 w-full rounded-full overflow-hidden"
            style={{ background: 'rgba(0,0,0,0.06)' }}
          >
            <motion.div
              className="h-full"
              style={{
                background:
                  'linear-gradient(90deg, var(--button-gradient-from), var(--button-gradient-to))',
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 140, damping: 22 }}
            />
          </div>
        </header>

        {/* Layout: timeline à esquerda + painel sticky à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Timeline */}
          <ol className="lg:col-span-3 relative">
            {/* linha vertical */}
            <span
              aria-hidden
              className="hidden lg:block absolute top-0 left-[18px] w-[2px] h-full"
              style={{ background: 'rgba(0,0,0,0.08)' }}
            />
            <div className="space-y-4 md:space-y-5">
              {steps.map((step, i) => {
                const Icon = step.icon
                  ? iconMap[step.icon as keyof typeof iconMap] ?? Cog
                  : undefined;

                const isActive = i === active;

                return (
                  <li key={i} className="relative">
                    <button
                      data-index={i}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-current={isActive ? 'step' : undefined}
                      className="w-full text-left rounded-xl p-4 md:p-5 focus:outline-none focus-visible:ring-2"
                      style={{
                        background:
                          'linear-gradient(180deg, var(--beneficios-card-from), var(--beneficios-card-to))',
                        border: isActive
                          ? '1px solid color-mix(in oklab, var(--primary) 40%, transparent)'
                          : '1px solid var(--beneficios-border)',
                        boxShadow: isActive
                          ? '0 8px 24px rgba(5,150,105,0.15)'
                          : '0 2px 10px rgba(0,0,0,0.04)',
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {/* marcador numérico */}
                        <span className="relative flex-none">
                          <span
                            className="grid place-items-center w-9 h-9 rounded-full text-white font-bold"
                            style={{
                              background:
                                'linear-gradient(180deg, var(--button-gradient-from), var(--button-gradient-to))',
                            }}
                          >
                            {i + 1}
                          </span>
                          <AnimatePresence>
                            {isActive && (
                              <motion.span
                                layoutId="halo"
                                className="absolute inset-0 rounded-full"
                                style={{ boxShadow: '0 0 0 6px rgba(16,185,129,0.18)' }}
                              />
                            )}
                          </AnimatePresence>
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4
                              className="text-lg md:text-xl font-bold"
                              style={{ color: 'var(--how-works-text)' }}
                            >
                              {step.title}
                            </h4>
                            {Icon && (
                              <span
                                className="inline-flex items-center justify-center rounded-full p-1.5"
                                style={{
                                  background: 'rgba(5,150,105,0.10)',
                                  border: '1px solid rgba(5,150,105,0.20)',
                                }}
                                aria-hidden
                              >
                                <Icon className="w-4 h-4" style={{ color: 'var(--how-works-icon)' }} />
                              </span>
                            )}
                            {isActive && (
                              <span
                                className="inline-flex items-center gap-1 text-xs font-semibold rounded-full px-2 py-0.5"
                                style={{
                                  color: 'var(--secondary)',
                                  background: 'rgba(132,204,22,0.10)',
                                  border: '1px solid rgba(132,204,22,0.25)',
                                }}
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Ativo
                              </span>
                            )}
                          </div>
                          <p
                            className="mt-1.5 text-sm md:text-[15px] leading-relaxed"
                            style={{ color: 'var(--how-works-desc)' }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </div>
          </ol>

          {/* Painel sticky com TEXTO DE EFEITO do passo ativo (sem imagens) */}
          <div className="lg:col-span-2">
            <div
              className="sticky top-24 rounded-2xl overflow-hidden shadow-lg"
              style={{
                border: '1px solid var(--beneficios-border)',
                background:
                  'linear-gradient(180deg, var(--beneficios-card-from), var(--beneficios-card-to))',
              }}
            >
              <div className="p-5 md:p-6">
                <p className="text-sm font-medium mb-3" style={{ color: 'var(--how-works-desc)' }}>
                  Mensagem-chave da etapa
                </p>

                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={active}
                    initial={{ opacity: 0, y: 8, scale: 0.995 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.995 }}
                    transition={{ duration: 0.22 }}
                    className="relative rounded-xl p-6"
                    style={{
                      background:
                        'linear-gradient(180deg, color-mix(in oklab, var(--hero-gradient-from) 75%, transparent), color-mix(in oklab, var(--hero-gradient-to) 75%, transparent))',
                      border: '1px solid color-mix(in oklab, var(--plans-border) 45%, transparent)',
                    }}
                  >
                    <Quote
                      aria-hidden
                      className="absolute -top-3 -left-3 w-8 h-8 opacity-70"
                      style={{ color: 'var(--how-works-icon)' }}
                    />
                    <span
                      className="block text-2xl md:text-3xl font-extrabold leading-snug bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          'linear-gradient(90deg, var(--button-gradient-from), var(--button-gradient-to))',
                      }}
                    >
                      {/* usa steps[active].effect se existir; fallback para o title */}
                      {(steps[active] as any)?.effect || steps[active]?.title}
                    </span>
                    {steps[active]?.description && (
                      <span
                        className="mt-3 block text-sm md:text-base"
                        style={{ color: 'var(--how-works-desc)' }}
                      >
                        {steps[active]?.description}
                      </span>
                    )}
                  </motion.blockquote>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
