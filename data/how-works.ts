// src/data/howWorks.ts
import { HowWorksData } from '@/types';

export const howWorksData: HowWorksData = {
  title: 'Como funciona',
  steps: [
    {
      title: 'Integre facilmente',
      description:
        'Conecte sua plataforma ou sistema de forma simples via API ou painel BRPay. Sem complicações, direto ao ponto.',
      icon: 'cogs',
      effect: 'Integração descomplicada',
    },
    {
      title: 'Ative em minutos',
      description:
        'Após integrar, sua conta já estará pronta para processar pagamentos com aprovação otimizada.',
      icon: 'rocket',
      effect: 'Comece rápido',
    },
    {
      title: 'Receba sem atrasos',
      description:
        'Pagamentos via PIX em D+0 e repasses ágeis para sua conta. Transparência total em cada transação.',
      icon: 'credit-card',
      effect: 'Liquidez imediata',
    },
  ],
};
