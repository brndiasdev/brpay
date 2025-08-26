import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://brpay.co"),
  title: "BRPay - A melhor solução para pagamentos online",
  description: "A melhor solução para pagamentos online.",
  keywords: ["", "", "", "", ""],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://brpay.co/",
    siteName: "BRPay",
    title: "BRPay - A melhor solução para pagamentos online",
    description: "A melhor solução para pagamentos online.",
  },

  /*
  twitter: {
    card: 'summary_large_image',
    title: '',
    description:
      'Descubra a plataforma pensada para seu negócio. Ofereça meios de pagamento locais para clientes do mundo todo.',
    images: ['/images/thumbnail.jpg'],
  }, */ robots: {
    index: true,
    follow: true,
},
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
