import type { Metadata } from "next";
import { getDictionary } from "../../dictionaries";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ThemeProvider } from "../../lib/ThemeContext";
import "../globals.css";

export const metadata: Metadata = {
  title: "Kacper Celejewski | Portfolio",
  description: "Junior Java Developer portfolio with a modern, terminal-inspired aesthetic.",
};

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'pl' | 'de');

  return (
    <html lang={locale}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header dict={dict} locale={locale} />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
