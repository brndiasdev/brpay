'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from 'lucide-react';

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.25 },
};

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)' }}
    >
      {/* Linha superior em gradiente */}
      <div
        className="h-[3px] w-full"
        style={{
          background:
            'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* COLUNA 1 — Marca & Pitch */}
          <motion.div {...fade}>
            <div className="flex flex-col items-center md:items-start">
              <h3
                className="text-2xl font-extrabold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, var(--primary), var(--secondary))',
                }}
              >
                BRPay
              </h3>
              <span
                className="mt-1 text-sm px-2 py-1 rounded-md border"
                style={{
                  borderColor: 'var(--footer-border)',
                  color: 'var(--footer-text-secondary)',
                }}
              >
                desde 2025
              </span>
            </div>

            <p
              className="mt-4 text-sm leading-relaxed md:max-w-sm text-center md:text-left"
              style={{ color: 'var(--footer-text-secondary)' }}
            >
              BRPay é o gateway de pagamentos moderno, seguro e escalável.
              Processamos PIX, cartão e boleto com máxima taxa de aprovação,
              liquidação rápida e transparência total para o seu negócio.
            </p>

            {/* Badges internos de segurança */}
            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs"
                style={{
                  borderColor: 'var(--footer-border)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <ShieldCheck className="h-4 w-4" aria-hidden />
                Segurança nível bancário
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs"
                style={{
                  borderColor: 'var(--footer-border)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <Lock className="h-4 w-4" aria-hidden />
                Criptografia ponta a ponta
              </span>
            </div>
          </motion.div>

          {/* COLUNA 2 — Navegação */}
          <motion.nav aria-label="Rodapé - navegação" {...fade}>
            <h4 className="text-lg font-semibold text-center md:text-left">Navegação</h4>
            <ul
              className="mt-3 space-y-2 text-center md:text-left"
              style={{ color: 'var(--footer-text-secondary)' }}
            >
              <li>
                <Link
                  href="/entrar"
                  className="inline-flex items-center gap-1 hover:text-[var(--footer-text)] transition-colors"
                >
                  Entrar <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-1 hover:text-[var(--footer-text)] transition-colors"
                >
                  Documentação <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="inline-flex items-center gap-1 hover:text-[var(--footer-text)] transition-colors"
                >
                  Status da plataforma <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>

            <h4 className="mt-6 text-lg font-semibold text-center md:text-left">Legal</h4>
            <ul
              className="mt-3 space-y-2 text-center md:text-left"
              style={{ color: 'var(--footer-text-secondary)' }}
            >
              <li>
                <Link
                  href="/termos"
                  className="hover:text-[var(--footer-text)] transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="hover:text-[var(--footer-text)] transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/conformidade"
                  className="hover:text-[var(--footer-text)] transition-colors"
                >
                  Conformidade &amp; Segurança
                </Link>
              </li>
            </ul>
          </motion.nav>

          {/* COLUNA 3 — Contato & Endereço */}
          <motion.div {...fade}>
            <h4 className="text-lg font-semibold text-center md:text-left">Contato</h4>
            <ul
              className="mt-3 space-y-2 text-sm text-center md:text-left"
              style={{ color: 'var(--footer-text-secondary)' }}
            >
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                <span>(11) 99374-4001</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden />
                <span>suporte@brpay.co</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden />
                <span>Atendimento: 9h às 18h (seg–sex)</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                <span>São Paulo — SP</span>
              </li>
            </ul>

            {/* Redes sociais */}
            <div className="mt-5 flex justify-center md:justify-start items-center gap-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md border hover:opacity-90 transition"
                style={{ borderColor: 'var(--footer-border)' }}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md border hover:opacity-90 transition"
                style={{ borderColor: 'var(--footer-border)' }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-md border hover:opacity-90 transition"
                style={{ borderColor: 'var(--footer-border)' }}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-md border hover:opacity-90 transition"
                style={{ borderColor: 'var(--footer-border)' }}
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Barra inferior */}
        <motion.div
          className="mt-10 pt-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--footer-border)', color: 'var(--footer-text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-center md:text-left">
            © 2025 BRPay 61.046.596/0001-55. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="opacity-80">PCI-DSS Ready</span>
            <span className="opacity-50">•</span>
            <span className="opacity-80">LGPD Compliance</span>
            <span className="opacity-50">•</span>
            <span className="opacity-80">Uptime 99,9%</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
