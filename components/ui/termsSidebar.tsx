'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

const links = [
  { href: '/termos', label: 'Termos de Uso', exact: true },
  { href: '/termos/politica-de-privacidade', label: 'Política de Privacidade' },
  { href: '/termos/politica-de-cookies', label: 'Política de Cookies' },
];

export default function TermsSidebar() {
  const pathname = usePathname();

  return (
    <aside className='w-full md:w-56 space-y-6 sticky top-24'>
      <div
        className='flex flex-col gap-3 p-4 bg-[var(--beneficios-card-from)] rounded-xl shadow-sm'
        style={{
          border: '1px solid var(--beneficios-border)',
        }}
      >
        {links.map((link) => {
          const isActive = link.exact
            ? pathname === link.href
            : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md font-medium transition text-sm ${isActive
                ? 'bg-[#F4A300] text-[--text-primary] font-semibold'
                : 'text-[--secondary] hover:bg-[#c58511]'
                }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className='pt-2'>
        <Link
          href='/'
          className='mt-auto w-full rounded-xl px-3 py-2 font-semibold flex items-center justify-center gap-2 transition duration-300 cursor-pointer bg-[var(--plans-button-hover)] text-[var(--plans-button-text)] border border-[var(--plans-button-text)] hover:bg-[var(--background)]'
        >
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </div>
    </aside>
  );
}
