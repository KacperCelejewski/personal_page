import styles from "./Contact.module.css";
import { getDictionary } from "../../../dictionaries";
import TerminalSection from "../../../components/TerminalSection";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'pl' | 'de' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="main-container">
      <div className={styles.header}>
        <h1 className={styles.title}>{dict.contact.title}</h1>
        <div className="terminal-status">{dict.contact.status}</div>
      </div>

      <div className={styles.layout}>
        <div className={styles.formSection}>
          <form className={styles.form}>
            <div className={styles.field}>
              <label>USER_IDENTIFIER</label>
              <input type="text" placeholder="NAME or ALIAS" />
            </div>
            <div className={styles.field}>
              <label>COMMUNICATION_ENDPOINT</label>
              <input type="email" placeholder="EMAIL_ADDRESS" />
            </div>
            <div className={styles.field}>
              <label>MESSAGE_PAYLOAD</label>
              <textarea placeholder="ENTER SYSTEM QUERY..." rows={8}></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              {dict.contact.send}
            </button>
          </form>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h2 className="text-mono">{dict.contact.channels}</h2>
            <div className={styles.channels}>
              <div className={styles.channelCard}>
                <div className={styles.channelIcon}></div>
                <div>
                  <span className={styles.channelLabel}>REPOSITORY</span>
                  <span className={styles.channelValue}>GITHUB</span>
                </div>
              </div>
              <div className={styles.channelCard}>
                <div className={styles.channelIcon}></div>
                <div>
                  <span className={styles.channelLabel}>PROFESSIONAL</span>
                  <span className={styles.channelValue}>LINKEDIN</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.availability}>
            <div className={styles.statusLine}>
              <span className={styles.availableDot}></span>
              STATUS: AVAILABLE
            </div>
            <p>Currently accepting new project inquiries. Response latency usually &lt; 24 hours.</p>
          </div>

          <div className={styles.debugLog}>
            <div className={styles.logLine}>[info] Connection stable...</div>
            <div className={styles.logLine}>[auth] Key recognized: GUEST_01</div>
            <div className={styles.logLine}>[sys] Listening for incoming data</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
