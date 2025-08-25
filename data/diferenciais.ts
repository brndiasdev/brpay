// src/data/diferenciais.ts

/** Ícones válidos para o componente DiferenciaisRapidos */
export type DiffIconName = 'zap' | 'shield' | 'chart' | 'percent' | 'lock' | 'bank';

export type DiffItem = {
  icon: DiffIconName;
  title: string;
  description: string;
  pill?: string;
};

export type DiferenciaisData = {
  eyebrow?: string; // Ex.: "Por que BRPay?"
  title?: string;   // Ex.: "Diferenciais rápidos"
  items: DiffItem[];
};

/** Conteúdo padrão da BRPay */
export const diferenciaisBRPay: DiferenciaisData = {
  eyebrow: 'Por que BRPay?',
  title: 'Diferenciais rápidos',
  items: [
    {
      icon: 'zap',
      title: 'PIX D+0',
      description: 'Liquidação no mesmo dia para acelerar seu fluxo de caixa.',
      pill: 'Imediato',
    },
    {
      icon: 'shield',
      title: 'Uptime 99,99%',
      description: 'Infra robusta com observabilidade e tolerância a falhas.',
    },
    {
      icon: 'percent',
      title: 'Taxas transparentes',
      description: 'Nada de pegadinha. Você sempre sabe o que está pagando.',
      pill: 'Sem surpresa',
    },
    {
      icon: 'chart',
      title: 'Alta aprovação',
      description: 'Motor de aprovação otimizado para reduzir atrito e aumentar conversões.',
    },
    {
      icon: 'lock',
      title: 'Segurança de ponta',
      description: 'KYC/KYB, antifraude e práticas PCI alinhadas ao mercado.',
    },
    {
      icon: 'bank',
      title: 'Saques ágeis',
      description: 'Retiros em D+0 e controle de repasses por período.',
    },
  ],
};

/** Helper opcional para clonar/estender com overrides */
export function getDiferenciaisBRPay(
  overrides?: Partial<DiferenciaisData>
): DiferenciaisData {
  return {
    ...diferenciaisBRPay,
    ...overrides,
    items: overrides?.items ?? diferenciaisBRPay.items,
  };
}
