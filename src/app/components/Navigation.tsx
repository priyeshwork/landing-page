'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' }
  ];

  return (
    <nav className="fixed top-4 right-20 z-50">
      <ul className="flex gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="relative">
              <span
                className={`text-sm font-medium ${
                  theme === 'light' ? 'text-gray-800' : 'text-white'
                } hover:opacity-70 transition-opacity`}
              >
                {label}
              </span>
              {pathname === href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-current"
                  initial={false}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
