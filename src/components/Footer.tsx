import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`main-container ${styles.inner}`}>
        <div className={styles.copyright}>
          ©{currentYear} KACPER CELEJEWSKI. ALL RIGHTS RESERVED.
        </div>
        
        <div className={styles.links}>
          <a href="https://github.com/KacperCelejewski" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">GITHUB</a>
          <a href="https://www.linkedin.com/in/kacper-celejewski/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">LINKEDIN</a>
          <a href="#" aria-label="Twitter/X Profile">TWITTER</a>
          <a href="mailto:email@example.com" aria-label="Send Email">EMAIL</a>
        </div>
      </div>
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerContent}>
           CPU LOAD: 12% | MEM USAGE: 4.2GB | LATENCY: 14MS | UPTIME: 99.9% | ENCRYPTION: AES-256 | SYSTEM STATUS: OPTIMAL
        </div>
      </div>
    </footer>
  );
}
