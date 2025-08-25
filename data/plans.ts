import { PlansData } from '@/types';

export const plansData: PlansData = {
  title: 'Temos o plano ideal para o seu negócio',
  description:
    'Do iniciante ao avançado, criamos opções para quem quer vender mais com um checkout poderoso.',
  plans: [
    {
      nome: 'Basic',
      preco: 'R$ 0',
      destaque: false,
      texto: '2,5% por pedido pago',
      descricao: '(cobrado diariamente)',
      beneficios: [
        'Checkout personalizável',
        'Pix e cartão',
        'Sem mensalidade',
      ],
    },
    {
      nome: 'Professional',
      preco: 'R$ 399,90',
      destaque: true,
      texto: '1,49% por pedido pago',
      descricao: '(cobrado diariamente)',
      beneficios: [
        'Checkout rápido',
        'Suporte dedicado',
        'Customização completa',
      ],
    },
    {
      nome: 'Business',
      preco: 'R$ 99,90',
      destaque: false,
      texto: '1,99% por pedido pago',
      descricao: '(cobrado diariamente)',
      beneficios: [
        'Checkout avançado',
        'Painel completo',
        'Integrações com plataformas',
      ],
    },
  ],
};
