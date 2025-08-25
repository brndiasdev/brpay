import { FaqData } from '@/types';

export const faqData: FaqData = {
  title: 'Perguntas Frequentes',
  items: [
    {
      question: 'Preciso ter empresa (CNPJ) para usar a BRPay?',
      answer:
        'Não. Você pode começar com CPF. Para emissão de notas e maiores volumes, recomendamos operar com CNPJ.',
    },
    {
      question: 'Quais formas de pagamento a BRPay aceita?',
      answer:
        'PIX, cartão de crédito e boleto — a disponibilidade depende da configuração do seu checkout BRPay.',
    },
    {
      question: 'Funciona com Shopify, WooCommerce e outras plataformas?',
      answer:
        'Sim! A BRPay integra facilmente com Shopify, WooCommerce, WordPress e outras soluções por meio de plugins e APIs.',
    },
    {
      question: 'Preciso saber programar para usar a BRPay?',
      answer:
        'Não! O painel BRPay foi pensado para qualquer pessoa configurar em poucos cliques, sem código.',
    },
  ],
  cta: {
    text: 'Fale com a BRPay no WhatsApp',
    href: 'https://wa.me/5500000000000',
    icon: 'whatsapp',
  },
};
