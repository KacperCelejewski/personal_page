import styles from './TerminalSection.module.css';

interface TerminalSectionProps {
  children: React.ReactNode;
  label?: string;
  status?: string;
  className?: string;
}

export default function TerminalSection({ children, label, status, className }: TerminalSectionProps) {
  return (
    <section className={`${styles.section} ${className || ''}`}>
      <div className={styles.header}>
        {label && <span className={styles.label}>{label}</span>}
        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        {status && <span className={styles.status}>{status}</span>}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}
