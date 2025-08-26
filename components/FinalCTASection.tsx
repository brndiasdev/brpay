"use client";

import { motion } from "framer-motion";
import PrimaryButton from "./ui/PrimaryButton";
import Link from "next/link";
import { ShieldCheck, Zap, CreditCard, Wallet, ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, var(--cta-gradient-from), var(--cta-gradient-via), var(--cta-gradient-to))",
        color: "var(--cta-text)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          {/* COLUNA ESQUERDA — Copy */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm"
              style={{
                borderColor: "var(--cta-badge-border, rgba(255,255,255,0.18))",
                background: "var(--cta-badge-bg, rgba(255,255,255,0.06))",
              }}
            >
              <ShieldCheck className="h-4 w-4" aria-hidden />
              BRPay para negócios que não podem parar
            </motion.div>

            <motion.h3
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--cta-heading, var(--cta-text))" }}
            >
              Aumente a aprovação e reduza atrito no checkout.
            </motion.h3>

            <motion.p className="mt-3 text-base md:text-lg opacity-90 max-w-prose">
              Plataforma de pagamentos com foco em conversão: PIX D+0, cartão
              com roteamento inteligente e conciliação simples — tudo em um só
              lugar.
            </motion.p>

            {/* Ações */}
            <motion.div className="mt-8 flex flex-col sm:flex-row gap-3">
              <PrimaryButton
                href="/entrar"
                aria-label="Criar minha conta grátis na BRPay"
                className="w-full sm:w-auto group bg-[var(--cta-button-bg)] text-[var(--cta-button-text)]
                           hover:bg-[var(--cta-button-hover-bg)] hover:text-[var(--cta-button-hover-text)]
                           font-semibold px-7 py-3 rounded-xl transition duration-300 shadow-lg"
              >
                Começar grátis
                <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </PrimaryButton>

              <Link
                href="/help"
                className="w-full sm:w-auto rounded-xl px-7 py-3 font-semibold text-center border transition
                           focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  color: "var(--cta-secondary-text, var(--cta-text))",
                  borderColor:
                    "var(--cta-secondary-border, rgba(255,255,255,0.25))",
                  background: "var(--cta-secondary-bg, transparent)",
                }}
                aria-label="Falar com um gerente da BRPay"
              >
                Falar com gerente
              </Link>
            </motion.div>

            {/* Bullets com ícones lucide */}
            <motion.ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li
                className="flex items-center gap-2 rounded-lg border px-3 py-2"
                style={{
                  borderColor: "var(--cta-chip-border, rgba(255,255,255,0.14))",
                  background: "var(--cta-chip-bg, rgba(255,255,255,0.06))",
                }}
              >
                <Zap className="h-4 w-4" aria-hidden /> PIX D+0
              </li>
              <li
                className="flex items-center gap-2 rounded-lg border px-3 py-2"
                style={{
                  borderColor: "var(--cta-chip-border, rgba(255,255,255,0.14))",
                  background: "var(--cta-chip-bg, rgba(255,255,255,0.06))",
                }}
              >
                <CreditCard className="h-4 w-4" aria-hidden /> Alta aprovação no
                cartão
              </li>
              <li
                className="flex items-center gap-2 rounded-lg border px-3 py-2"
                style={{
                  borderColor: "var(--cta-chip-border, rgba(255,255,255,0.14))",
                  background: "var(--cta-chip-bg, rgba(255,255,255,0.06))",
                }}
              >
                <Wallet className="h-4 w-4" aria-hidden /> Saques rápidos
              </li>
              <li
                className="flex items-center gap-2 rounded-lg border px-3 py-2"
                style={{
                  borderColor: "var(--cta-chip-border, rgba(255,255,255,0.14))",
                  background: "var(--cta-chip-bg, rgba(255,255,255,0.06))",
                }}
              >
                <ShieldCheck className="h-4 w-4" aria-hidden /> Segurança nível
                bancário
              </li>
            </motion.ul>
          </div>

          {/* COLUNA DIREITA — Card “Prova social/Resumo” */}
          <motion.div>
            <div
              className="rounded-2xl border shadow-2xl p-6 md:p-8 backdrop-blur-md"
              style={{
                background: "var(--cta-card-bg, rgba(0, 0, 0, 0.034))",
                borderColor: "var(--cta-card-border, rgba(255, 255, 255)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-lg grid place-items-center border"
                  style={{
                    borderColor:
                      "var(--cta-card-border, rgba(255,255,255,0.15))",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  <Zap className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="text-sm opacity-80">
                    Tempo médio de liquidação PIX
                  </p>
                  <p className="text-xl font-bold">D+0</p>
                </div>
              </div>

              <hr className="my-6 border-white/10" />

              <div className="grid grid-cols-2 gap-4">
                <div
                  className="rounded-lg border p-4"
                  style={{
                    borderColor:
                      "var(--cta-card-border, rgba(255,255,255,0.15))",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <p className="text-xs opacity-70">Taxa de aprovação</p>
                  <p className="mt-1 text-lg font-semibold">+98%</p>
                </div>
                <div
                  className="rounded-lg border p-4"
                  style={{
                    borderColor:
                      "var(--cta-card-border, rgba(255,255,255,0.15))",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <p className="text-xs opacity-70">Uptime</p>
                  <p className="mt-1 text-lg font-semibold">99,9%</p>
                </div>
                <div
                  className="rounded-lg border p-4 col-span-2"
                  style={{
                    borderColor:
                      "var(--cta-card-border, rgba(255,255,255,0.15))",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <p className="text-xs opacity-70">Integrações</p>
                  <p className="mt-1 font-medium">
                    Shopify, WooCommerce, WordPress e API própria
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs opacity-70">
                Ao continuar, você concorda com os termos e políticas da BRPay.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
