"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from '../lib/ThemeContext';
import styles from './Header.module.css';

interface HeaderProps {
  dict: any;
  locale: string;
}

export default function Header({ dict, locale }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);
  
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

        <div className={styles.mobileQuickActions}>
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label={dict.a11y.toggle_theme}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <div className={styles.langSwitcher}>
            {['EN', 'PL', 'DE'].map((lang) => (
              <Link
                key={lang}
                href={`/${lang.toLowerCase()}${pathname.substring(3)}`}
                className={locale.toUpperCase() === lang ? styles.activeLang : ''}
                aria-label={`${dict.a11y.current_lang} ${lang}`}
                aria-current={locale.toUpperCase() === lang ? 'page' : undefined}
              >
                {lang}
              </Link>
            ))}
          </div>
        </div>

        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? dict.a11y.close_menu : dict.a11y.open_menu}
          aria-expanded={isMenuOpen}
        >
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} aria-hidden="true">
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
          
          <div className={styles.mobileActions}>
            <div className={styles.langPicker}>
              {['en', 'pl', 'de'].map((l) => (
                <Link
                  key={l}
                  href={`/${l}${pathname.substring(3) || ''}`}
                  className={locale === l ? styles.activeLang : ''}
                  aria-label={`${dict.a11y.current_lang} ${l.toUpperCase()}`}
                  aria-current={locale === l ? 'page' : undefined}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
            <button 
              className={styles.themeToggle} 
              onClick={toggleTheme}
              aria-label={mounted ? (theme === 'light' ? dict.a11y.toggle_dark : dict.a11y.toggle_light) : 'Toggle theme'}
            >
              {mounted ? (theme === 'light' ? '🌙 LIGHT' : '☀️ DARK') : '🌙 LIGHT'}
            </button>
          </div>
        </nav>

        <div className={styles.actions}>
          <div className={styles.langPicker}>
            {['en', 'pl', 'de'].map((l) => (
              <Link
                key={l}
                href={`/${l}${pathname.substring(3) || ''}`}
                className={locale === l ? styles.activeLang : ''}
                aria-label={`${dict.a11y.current_lang} ${l.toUpperCase()}`}
                aria-current={locale === l ? 'page' : undefined}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label={mounted ? (theme === 'light' ? dict.a11y.toggle_dark : dict.a11y.toggle_light) : 'Toggle theme'}
          >
            {mounted ? (theme === 'light' ? '🌙' : '☀️') : '🌙'}
          </button>

          <button className={styles.resumeBtn}>
            {dict.nav.resume}
          </button>
        </div>
      </div>
    </header>
  );
}
