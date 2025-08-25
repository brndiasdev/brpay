'use client';

import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ShieldCheck, Zap, LineChart } from 'lucide-react';
import { HeroData } from '@/types';
import PrimaryButton from './ui/PrimaryButton';

interface HeroSectionProps {
  data: HeroData;
}

/**
 * Hero BRPay — versão “única”
 * - 100% texto (sem imagem), foco em brand e mensagem
 * - Wordmark com gradiente e "sheen" animado
 * - Badges (uptime, PIX D+0, aprovação alta)
 * - CTA primário sólido + CTA secundário outline
 * - Fundo com grid animado + glow radial
 */
export default function HeroSection({ data }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();

  // movimento sutil no background
  const t = useMotionValue(0);
  const bgShift = useTransform(t, (v) => `${v % 100}%`);

  useEffect(() => {
    setMounted(true);
    let raf: number;
    const loop = () => {
      t.set(t.get() + 0.12);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    return () => cancelAnimationFrame(raf);
  }, [controls, t]);

  return (
    <section
      id="hero"
      className="relative w-full pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden"
      style={{
        // blend do gradiente-base do tema com um toque translúcido
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--hero-gradient-from) 90%, transparent), color-mix(in oklab, var(--hero-gradient-to) 90%, transparent))',
      }}
    >
      {/* Glow radial ao fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage: 'radial-gradient(60% 50% at 50% 30%, black 40%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(60% 50% at 50% 30%, black 40%, transparent 60%)',
          background:
            'radial-gradient(1200px 600px at 50% 0%, rgba(16,185,129,0.15), transparent 60%)',
        }}
      />

      {/* Grid animado sutil */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: `${bgShift} ${bgShift}`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Wordmark com sheen */}
          <div className="inline-block relative">
            <h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent"
              style={{
                lineHeight: 1.05,
                backgroundImage:
                  'linear-gradient(90deg, var(--button-gradient-from), var(--button-gradient-to))',
              }}
            >
              BRPay
            </h1>

            {/* Sheen animado */}
            <AnimatePresence>
              {mounted && (
                <motion.span
                  aria-hidden
                  initial={{ x: '-120%', opacity: 0 }}
                  animate={{ x: '120%', opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-y-0 -inset-x-10 skew-x-12"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
                    mixBlendMode: 'overlay',
                  }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Headline e sub */}
          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight">
            {data?.title?.text}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, var(--button-gradient-from), var(--button-gradient-to))',
              }}
            >
              {data?.title?.highlight}
            </span>
          </h2>

          {/* Underline gradiente “vivo” */}
          <div className="mx-auto mt-3 h-[6px] w-28 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, var(--button-gradient-from), var(--button-gradient-to), var(--button-gradient-from))',
              filter: 'blur(0.2px)',
            }}
          />

          <p className="mt-6 text-lg md:text-xl text-[var(--text-secondary)]">
            {data?.description}
          </p>

          {/* Badges de confiança */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Badge icon={<ShieldCheck className="w-4 h-4" />} label="Uptime 99,99%" />
            <Badge icon={<Zap className="w-4 h-4" />} label="PIX D+0" tone="secondary" />
            <Badge icon={<LineChart className="w-4 h-4" />} label="Alta aprovação" />
          </div>

          {/* CTAs */}
          <div className="mt-9 flex items-center justify-center gap-3 md:gap-4">
            {/* Primário: usar seu PrimaryButton para manter o padrão */}
            <PrimaryButton href="/entrar">
              {data?.cta || 'Entrar'}
            </PrimaryButton>

            {/* Secundário: outline */}
            <Link
              href="#taxas"
              className="inline-flex items-center rounded-full px-5 py-3 text-sm md:text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                color: 'var(--primary)',
                border: '1px solid color-mix(in oklab, var(--primary) 45%, transparent)',
                background: 'linear-gradient(0deg, rgba(5,150,105,0.06), rgba(5,150,105,0.06))',
              }}
            >
              Ver taxas
            </Link>
          </div>

          {/* Micro-copy abaixo do CTA */}
          <p className="mt-3 text-xs md:text-sm text-[var(--text-secondary)] opacity-80">
            Sem mensalidade fixa • Integração rápida • Suporte humano
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/** Badge de confiança com duas variações de tom */
function Badge({
  icon,
  label,
  tone = 'primary',
}: {
  icon: React.ReactNode;
  label: string;
  tone?: 'primary' | 'secondary';
}) {
  const isSecondary = tone === 'secondary';
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs md:text-sm font-medium"
      style={{
        color: isSecondary ? 'var(--secondary)' : 'var(--primary)',
        background: isSecondary
          ? 'rgba(132,204,22,0.10)' // lime
          : 'rgba(5,150,105,0.10)',   // emerald
        border: isSecondary
          ? '1px solid rgba(132,204,22,0.25)'
          : '1px solid rgba(5,150,105,0.25)',
      }}
    >
      <span aria-hidden>{icon}</span>
      {label}
    </div>
  );
}
