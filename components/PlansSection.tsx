"use client";

import { motion } from "framer-motion";

type FeeRow = { label: string; value: string };
type ExtraCard = { label: string; value: string };

export type FeesBlockData = {
  title: string;
  description: string;
  fees: FeeRow[];
  extras: ExtraCard[];
};

interface FeesSectionProps {
  data: FeesBlockData;
}

export default function FeesSectionBRPay({ data }: FeesSectionProps) {
  return (
    <section
      id="taxas"
      className="relative w-full py-24 px-4 md:px-8 overflow-hidden"
      style={{
        /* Usa seus tokens BRPay (verde) já definidos */
        background: `linear-gradient(to top, var(--plans-gradient-from), var(--plans-gradient-to))`,
        // cor dos pontinhos (emerald-600 com alpha, pode ajustar se quiser)
        ["--fees-grid" as string]: "rgba(5, 150, 105, 0.14)",
      }}
    >
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Título com gradiente BRPay */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
          style={{
            background:
              "linear-gradient(90deg, var(--button-gradient-from) 0%, var(--button-gradient-to) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {data.title}
        </motion.h2>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-xl md:text-2xl mb-6"
          style={{ color: "var(--plans-desc)" }}
        >
          {data.description}
        </motion.p>

        {/* Divisória */}
        <div
          className="mx-auto mb-10 h-[2px] max-w-[900px]"
          style={{ backgroundColor: "var(--plans-border)" }}
        />

        {/* Lista de taxas (label acima, valor abaixo) */}
        <div className="space-y-8">
          {data.fees.map((fee, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <div
                className="text-lg md:text-xl font-semibold"
                style={{ color: "var(--plans-text)" }}
              >
                {fee.label}
              </div>
              <div
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "var(--primary)" }} // destaque verde da BRPay
              >
                {fee.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divisória */}
        <div
          className="mx-auto my-10 h-[2px] max-w-[900px]"
          style={{ backgroundColor: "var(--plans-border)" }}
        />

        {/* Extras: Checkout / Reserva / Saque */}
        <div className="space-y-7">
          {data.extras.map((ex, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.02 * idx }}
            >
              <div
                className="text-lg md:text-xl font-semibold"
                style={{ color: "var(--plans-text)" }}
              >
                {ex.label}
              </div>
              <div
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "var(--primary)" }}
              >
                {ex.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Linha final */}
        <div
          className="mx-auto mt-12 h-[2px] max-w-[900px]"
          style={{ backgroundColor: "var(--plans-border)" }}
        />
      </div>
    </section>
  );
}

/* ----- Dados iguais ao print ----- */
export const feesDataBRPay: FeesBlockData = {
  title: "Taxas e Tarifas",
  description:
    "Taxas baixas e aprovações altas, tudo para alavancar o seu negócio.",
  fees: [
    { label: "Cartão de Crédito D+2", value: "6.99% + R$1,99*" },
    { label: "PIX D+0", value: "1.99% + R$1,99*" },
    { label: "Boleto D+2", value: "1.99% + R$3,49*" },
    { label: "Tarifa por Saque", value: "R$ 4,99*" },
  ],
  extras: [
    { label: "Checkout", value: "Vega - Luna - Aproveei" },
    { label: "Reserva", value: "Negociável" },
    { label: "Saque", value: "Múltiplas Chaves" },
  ],
};
