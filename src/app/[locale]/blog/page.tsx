import { getBlogPosts } from "../../../lib/blog";
import { getDictionary } from "../../../dictionaries";
import Link from "next/link";
import styles from "./Blog.module.css";
import TerminalSection from "../../../components/TerminalSection";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = await getBlogPosts(locale);
  const dict = await getDictionary(locale as 'en' | 'pl' | 'de');

  return (
    <div className="main-container">
      <header className={styles.header}>
        <div className="terminal-status">ARCHIVE_STATUS: ONLINE</div>
        <h1 className={styles.title}>
          Thoughts on <span className="text-primary">Architecture</span>, Logic & Synthesis.
        </h1>
        <p className={styles.subtitle}>
          A collection of technical deep-dives, architectural post-mortems, and experiments in artificial intelligence.
        </p>
      </header>

      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.filters}>
            <span className={styles.filterLabel}>FILTER_BY:</span>
            <button className={styles.activeFilter}>ALL_LOGS</button>
            <button className={styles.filter}>JAVA</button>
            <button className={styles.filter}>KAFKA</button>
            <button className={styles.filter}>AI</button>
          </div>

          <div className={styles.postsGrid}>
            {posts.map((post: any) => (
              <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className={styles.postCard}>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>{post.metadata.date}</span>
                  <span className="text-primary">{post.metadata.category.toUpperCase()}</span>
                </div>
                <h2 className={styles.postTitle}>{post.metadata.title}</h2>
                <p className={styles.postExcerpt}>{post.metadata.excerpt}</p>
                <div className={styles.postFooter}>
                  <span className={styles.readMore}>READ_ENTRY {"->"}</span>
                  <span className={styles.logId}>LOG_{post.slug.substring(0, 3).toUpperCase()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
