import styles from "./Projects.module.css";
import { getDictionary } from "../../../dictionaries";
import { projects } from "../../../lib/projects";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'pl' | 'de');

  return (
    <div className="main-container">
      <div className={styles.terminalWindow}>
        <div className={styles.terminalHeader}>
          <div className={styles.dots}>
            <span></span><span></span><span></span>
          </div>
          <span className={styles.path}>kacper@celejewski:~/projects</span>
        </div>
        <div className={styles.terminalBody}>
          <div className={styles.commandLine}>
            <span className={styles.prompt}>kacper@celejewski:~$</span> ls -la /projects/featured
          </div>
          <div className={styles.lsOutput}>
            {projects.map(p => (
              <span key={p.id}>drwxr-xr-x {p.slug.replace('-', '_')}</span>
            ))}
            <span>drwxr-xr-x data_glitch</span>
          </div>
          <div className={styles.commandLine}>
            <span className={styles.prompt}>kacper@celejewski:~$</span> cat readme_v2.txt
          </div>
          <div className={styles.readmeText}>
            {locale === 'pl' ? 'Wybrane wdrożenia prezentujące możliwości full-stack, architekturę o wysokiej wydajności i minimalistyczną estetykę inżynieryjną.' : 
             locale === 'de' ? 'Ausgewählte Implementierungen, die Full-Stack-Fähigkeiten, Hochleistungsarchitektur und minimalistische ästhetische Technik demonstrieren.' :
             'Selected deployments showcasing full-stack capabilities, high-performance architecture, and minimalist aesthetic engineering.'}
          </div>
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={project.id} className={`${styles.projectCard} ${index === 0 ? styles.large : ''}`}>
            <div className={index === 0 ? styles.projectImage : styles.projectImageSmall}>
               <div className={index === 0 ? styles.imageOverlay : styles.imageOverlaySmall}>
                 {project.imageOverlay}
               </div>
            </div>
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDesc}>
                {index === 0 
                  ? (dict.projects[project.slug.replace('-', '_') as keyof typeof dict.projects]?.longDesc || project.longDesc)
                  : (dict.projects[project.slug.replace('-', '_') as keyof typeof dict.projects]?.desc || project.desc)}
              </p>
              <div className={styles.tags}>
                {project.links.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={index !== 0 ? styles.viewLink : ''}>
                  GITHUB_REPO
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
