"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '../lib/ThemeContext';
import styles from './Header.module.css';

interface HeaderProps {
  dict: any;
  locale: string;
}

export default function Header({ dict, locale }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const navItems = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.projects, href: `/${locale}/projects` },
    { label: dict.nav.blog, href: `/${locale}/blog` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={styles.header}>
      <div className={`main-container ${styles.headerInner}`}>
        <Link href={`/${locale}`} className={styles.logo}>
          KACPER<span className="text-primary">_CELEJEWSKI</span>
        </Link>

        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
            <span></span><span></span><span></span>
          </div>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.langPicker}>
            <Link href="/en" className={locale === 'en' ? styles.activeLang : ''}>EN</Link>
            <span>|</span>
            <Link href="/pl" className={locale === 'pl' ? styles.activeLang : ''}>PL</Link>
            <span>|</span>
            <Link href="/de" className={locale === 'de' ? styles.activeLang : ''}>DE</Link>
          </div>
          
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button className={styles.resumeBtn}>
            {dict.nav.resume}
          </button>
        </div>
      </div>
    </header>
  );
}
