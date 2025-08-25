'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

// Agora buscamos os dados (em vez de importar constantes)
import { fetchTermsData, fetchPrivacyPolicy } from '@/data/fetchTermsData';

type TermsTable = {
  headers: string[];
  rows: Record<string, string | string[]>[];
};

type TermsItem = {
  title: string;
  date?: string;
  content?: string | string[];
  table?: TermsTable;
  moreContent?: string[];
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function TermosPage() {
  const [activeTab, setActiveTab] = useState<'termos' | 'privacidade'>('termos');
  const [terms, setTerms] = useState<TermsItem[]>([]);
  const [privacy, setPrivacy] = useState<TermsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [t, p] = await Promise.all([fetchTermsData(), fetchPrivacyPolicy()]);
        if (!mounted) return;
        setTerms(t as TermsItem[]);
        setPrivacy(p as TermsItem[]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const tabs = useMemo(
    () => ({
      termos: { label: 'Termos de Uso', data: terms },
      privacidade: { label: 'Política de Privacidade', data: privacy },
    }),
    [terms, privacy]
  );

  const current = tabs[activeTab];

  return (
    <section
      className="w-full min-h-screen px-4 md:px-8 pt-28 pb-10"
      style={{ background: 'var(--beneficios-bg)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* SIDEBAR */}
        <div className="h-fit flex flex-col gap-6 items-center">
          <aside
            className="w-full h-fit md:p-6 rounded-xl md:w-64 shrink-0 flex flex-col justify-between gap-6"
            style={{
              border: '1px solid var(--beneficios-border)',
              background:
                'linear-gradient(to bottom right, var(--beneficios-card-from), var(--beneficios-card-to))',
            }}
          >
            <ul className="space-y-3">
              {Object.entries(tabs).map(([key, { label }]) => {
                const isActive = activeTab === (key as 'termos' | 'privacidade');
                return (
                  <li key={key}>
                    <button
                      onClick={() => setActiveTab(key as 'termos' | 'privacidade')}
                      aria-current={isActive ? 'page' : undefined}
                      className="w-full text-left px-3 py-2 rounded-lg transition"
                      style={
                        isActive
                          ? {
                              background:
                                'linear-gradient(90deg, var(--primary), var(--secondary))',
                              color: '#0b1220',
                              fontWeight: 700,
                            }
                          : {
                              color: 'var(--beneficios-desc)',
                            }
                      }
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <Link
            href="/"
            className="mt-auto w-full rounded-xl px-6 py-3 font-semibold flex items-center justify-center gap-2 transition cursor-pointer
              bg-white text-[var(--plans-button-text)] border border-[var(--plans-button-text)] hover:bg-[var(--plans-button-hover)]"
          >
            <FiArrowLeft />
            Voltar para o início
          </Link>
        </div>

        {/* CONTEÚDO */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          className="flex-1 rounded-2xl p-6 md:p-8 shadow-md"
          style={{
            border: '1px solid var(--beneficios-border)',
            background:
              'linear-gradient(to bottom right, var(--beneficios-card-from), var(--beneficios-card-to))',
          }}
        >
          <h1 className="text-3xl font-bold mb-2">
            <span
              className="bg-gradient-to-r from-[var(--primary)] via-[var(--button-gradient-to)] to-[var(--primary)] bg-clip-text text-transparent"
            >
              {current.label}
            </span>
          </h1>

          {/* Data (se existir no primeiro item dos termos) */}
          {activeTab === 'termos' && terms?.[0]?.date ? (
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              {terms[0].date}
            </p>
          ) : (
            <div className="mb-4" />
          )}

          {loading ? (
            <div className="space-y-3">
              <div className="h-5 w-2/3 rounded bg-[var(--plans-button-hover)]" />
              <div className="h-4 w-full rounded bg-[var(--plans-button-hover)]" />
              <div className="h-4 w-5/6 rounded bg-[var(--plans-button-hover)]" />
              <div className="h-4 w-4/6 rounded bg-[var(--plans-button-hover)]" />
            </div>
          ) : (
            current.data.map((section: TermsItem, idx: number) => (
              <motion.div
                key={`${section.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-8"
              >
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {section.title}
                </h2>

                {/* content: string | string[] */}
                {(() => {
                  const paragraphs = Array.isArray(section.content)
                    ? section.content
                    : section.content
                    ? [section.content]
                    : [];

                  return paragraphs.length ? (
                    <div className="space-y-2">
                      {paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-sm leading-relaxed whitespace-pre-line"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ) : null;
                })()}

                {/* tabela opcional */}
                {section.table ? (
                  <div className="mt-4 overflow-x-auto">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <thead>
                        <tr>
                          {section.table.headers.map((h, i) => (
                            <th
                              key={i}
                              className="text-left p-3"
                              style={{
                                borderBottom: '1px solid var(--beneficios-border)',
                                color: 'var(--text-secondary)',
                              }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {section.table!.headers.map((h, cIdx) => {
                              const cell = row[h] as string | string[] | undefined;
                              const value = Array.isArray(cell) ? cell.join('\n') : cell;
                              return (
                                <td
                                  key={cIdx}
                                  className="align-top p-3 whitespace-pre-line"
                                  style={{
                                    borderBottom: '1px solid var(--beneficios-border)',
                                  }}
                                >
                                  {value}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {/* moreContent opcional */}
                {Array.isArray(section.moreContent) && section.moreContent.length ? (
                  <div className="mt-3 space-y-2">
                    {section.moreContent.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed whitespace-pre-line"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
