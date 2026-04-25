import Link from "next/link";
import { getDictionary } from "../../dictionaries";
import TerminalSection from "../../components/TerminalSection";
import LogWindow from "../../components/LogWindow";
import { projects } from "../../lib/projects";
import styles from "./Home.module.css";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'pl' | 'de');

  const logs = [
    { time: "2024-06-20 14:22:01", type: "INFO", message: "Initializing system core..." },
    { time: "2024-06-20 14:22:03", type: "INFO", message: "Loading stack: Rust, TS, AWS, Postgres", color: "#00ffcc" },
    { time: "2024-06-20 14:22:04", type: "INFO", message: "Optimizing performance buffers..." },
    { time: "2024-06-20 14:22:05", type: "SUCCESS", message: "Connection established.", color: "#27c93f" },
  ];

  return (
    <div className="main-container">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className="terminal-status">{dict.hero.status}</div>
          <h1 className={styles.title}>
            {dict.hero.title}
          </h1>
          <p className={styles.subtitle}>{dict.hero.subtitle}</p>
          <div className={styles.ctaGroup}>
            <Link href={`/${locale}/contact`}>
              <button className={styles.primaryBtn}>{dict.hero.cta_init}</button>
            </Link>
            <a href="https://github.com/KacperCelejewski" target="_blank" rel="noopener noreferrer">
              <button className={styles.secondaryBtn}>{dict.hero.cta_source}</button>
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <LogWindow logs={logs} path="SYSTEM_LOAD_BR-001X" />
        </div>
      </section>

      <section className={styles.techStack}>
        <div className={styles.sectionHeader}>
          <h2 className="text-mono">{dict.tech_stack.title}</h2>
          <span className={styles.systemIntegrity}>{dict.tech_stack.integrity}</span>
        </div>
        <div className={styles.techGrid}>
          {[
            { name: 'Java', icon: '☕' },
            { name: 'Spring Boot', icon: '🍃' },
            { name: 'Kafka', icon: '⚡' },
            { name: 'GCP', icon: '☁️' },
            { name: 'Cloud Foundry', icon: '⛅' },
            { name: 'Claude AI', icon: '🤖' }
          ].map((tech) => (
            <div key={tech.name} className={styles.techCard}>
              <div className={styles.techIcon}>{tech.icon}</div>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.projects}>
        <div className={styles.sectionHeader}>
          <h2 className="text-mono">{dict.projects.title}</h2>
          <Link href={`/${locale}/projects`} className={styles.viewAll}>
            {dict.projects.view_all}
          </Link>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.placeholder}>_PRJ_0{project.id}</div>
              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectTag}>{project.tag}</span>
                  <div className={styles.terminalDots}>
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>
                  {dict.projects[project.slug.replace('-', '_') as keyof typeof dict.projects]?.desc || project.desc}
                </p>
                <div className={styles.projectLinks}>
                  {project.links.map(link => (
                    <span key={link} className={styles.tag}>{link}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
