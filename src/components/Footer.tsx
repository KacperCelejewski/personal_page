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
          <a href="https://github.com/KacperCelejewski" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/kacper-celejewski/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="#">TWITTER</a>
          <a href="#">EMAIL</a>
        </div>
      </div>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
           CPU LOAD: 12% | MEM USAGE: 4.2GB | LATENCY: 14MS | UPTIME: 99.9% | ENCRYPTION: AES-256 | SYSTEM STATUS: OPTIMAL
        </div>
      </div>
    </footer>
  );
}
