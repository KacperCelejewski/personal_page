import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';
import { ThemeProvider } from '../lib/ThemeContext';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/pl',
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Header Component', () => {
  const mockLocale = 'pl';
  const mockDict = {
    nav: {
      home: 'Główna',
      projects: 'Projekty',
      blog: 'Blog',
      contact: 'Kontakt',
    },
  };

  const renderHeader = () => {
    return render(
      <ThemeProvider>
        <Header locale={mockLocale} dict={mockDict} />
      </ThemeProvider>
    );
  };

  it('renders navigation links', () => {
    renderHeader();
    expect(screen.getByText('Główna')).toBeInTheDocument();
    expect(screen.getByText('Projekty')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders branding elements', () => {
    renderHeader();
    expect(screen.getByText(/KACPER/)).toBeInTheDocument();
    expect(screen.getByText(/_CELEJEWSKI/)).toBeInTheDocument();
  });

  it('renders theme toggle', () => {
    renderHeader();
    const toggle = screen.getByLabelText('Toggle theme');
    expect(toggle).toBeInTheDocument();
  });
});
