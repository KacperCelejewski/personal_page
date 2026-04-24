import styles from './LogWindow.module.css';

interface LogWindowProps {
  logs: { time: string; type: string; message: string; color?: string }[];
  path?: string;
}

export default function LogWindow({ logs, path }: LogWindowProps) {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <span className={styles.path}>{path || 'SYSTEM_LOGS.SH'}</span>
      </div>
      <div className={styles.content}>
        {logs.map((log, idx) => (
          <div key={idx} className={styles.line}>
            <span className={styles.time}>[{log.time}]</span>{' '}
            <span className={styles.type} style={{ color: log.color || 'var(--primary)' }}>{log.type}</span>{' '}
            <span className={styles.message}>{log.message}</span>
          </div>
        ))}
        <div className={styles.cursorLine}>
          <span className={styles.prompt}>kacper@celejewski:~$</span>
          <span className={styles.inputText}> Fetching latest updates from repository</span>
          <span className="cursor-blink">_</span>
        </div>
      </div>
    </div>
  );
}
