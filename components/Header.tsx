'use client';

import { useEffect, useState, useMemo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, ShieldCheck, Timer, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SideMenu from './SideMenu';

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  return hasMounted;
}

const navLinks = [
  { text: 'Benefícios', href: '#beneficios' },
  { text: 'Como funciona', href: '#como-funciona' },
  { text: 'FAQ', href: '#faq' },
];

function BrandWordmark() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="select-none"
      aria-label="Voltar ao topo"
    >
      <span
        className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent"
       style={{
                  backgroundImage:
                    'linear-gradient(to right, var(--primary), var(--secondary))',
                }}
      >
        BRPay
      </span>
    </button>
  );
}

function TopBar() {
  return (
    <div
      className="hidden md:block"
      style={{
        background:
          'linear-gradient(to right, var(--hero-gradient-from), var(--hero-gradient-to))',
      }}
    >
      <div className="mx-auto max-w-7xl px-8 py-2.5 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <ShieldCheck className="w-4 h-4" style={{ color: 'var(--primary)' }} />
          <span>Uptime 99,99%</span>
        </div>
        <span className="h-4 w-px bg-[var(--footer-border)]" />
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <Zap className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
          <span>PIX D+0</span>
        </div>
        <span className="h-4 w-px bg-[var(--footer-border)]" />
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <Timer className="w-4 h-4" style={{ color: 'var(--primary)' }} />
          <span>Aprovação alta</span>
        </div>
        <div className="ml-auto">
          <Link
            href="/register"
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{
              color: 'var(--primary)',
              background: 'rgba(5,150,105,0.08)',
              border: '1px solid rgba(5,150,105,0.20)',
            }}
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const hasMounted = useHasMounted();

  useEffect(() => {
    let isManualScroll = false;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isManualScroll && currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
      isManualScroll = false;
    };
    const handleManualScroll = () => { isManualScroll = true; };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleManualScroll, { passive: true });
    window.addEventListener('touchmove', handleManualScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleManualScroll);
      window.removeEventListener('touchmove', handleManualScroll);
    };
  }, [lastScrollY]);

  const headerClass = useMemo(
    () =>
      `fixed top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${isMenuOpen ? 'z-[80]' : 'z-50'}`,
    [showHeader, isMenuOpen]
  );

  return (
    <>
      {/* Top utility bar com métricas de gateway */}
      <TopBar />

      <header
        className={headerClass}
        style={{
          background:
            'color-mix(in oklab, var(--header-bg) 75%, transparent)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid color-mix(in oklab, var(--plans-border) 40%, transparent)',
        }}
      >
        <div className="mx-auto max-w-7xl h-16 md:h-20 px-4 md:px-8 flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" aria-label="BRPay - Página inicial">
            <BrandWordmark />
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const el = document.getElementById(link.href.slice(1));
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium hover:opacity-90 transition-opacity bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                }}
              >
                {link.text}
              </button>
            ))}
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/register"
              className="hidden md:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all"
              style={{
                color: 'var(--primary)',
                border: '1px solid color-mix(in oklab, var(--primary) 40%, transparent)',
                background:
                  'linear-gradient(0deg, rgba(5,150,105,0.08), rgba(5,150,105,0.08))',
              }}
            >
              Cadastre-se
            </Link>

            {/* Botão sólido: Entrar na BRPay */}
            <Link
              href="/entrar"
              className="inline-flex items-center justify-center rounded-full px-4 md:px-5 py-2 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                color: 'var(--cta-button-text)',
                background:
                  'linear-gradient(90deg, var(--button-gradient-from), var(--button-gradient-to))',
              }}
            >
              Entrar
            </Link>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-transform hover:scale-110"
              aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
              style={{ background: 'transparent' }}
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
              ) : (
                <Sun className="w-6 h-6" style={{ color: 'var(--primary)' }} />
              )}
            </button>

            {/* Mobile Menu Button */}
            {hasMounted && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-4 rounded-full transition-colors"
                aria-label="Abrir menu"
                style={{ background: 'transparent' }}
              >
                <div className="w-6 h-6 relative">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                    className="absolute w-full h-0.5"
                    style={{
                      top: 0,
                      backgroundColor: 'var(--text-primary)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute w-full h-0.5"
                    style={{
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'var(--text-primary)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                    className="absolute w-full h-0.5"
                    style={{
                      bottom: 0,
                      backgroundColor: 'var(--text-primary)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </div>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* SideMenu mobile */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
