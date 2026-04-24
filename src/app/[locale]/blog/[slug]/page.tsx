import { getBlogPost } from "../../../../lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import styles from "../Blog.module.css";
import detailStyles from "./BlogDetail.module.css";
import TerminalSection from "../../../../components/TerminalSection";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getBlogPost(locale, slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="main-container">
      <div className={detailStyles.backNav}>
        <Link href={`/${locale}/blog`} className={detailStyles.backLink}>
          ← BACK TO BLOG
        </Link>
      </div>

      <header className={detailStyles.header}>
        <div className={detailStyles.meta}>
          <span className={detailStyles.category}>{post.metadata.category}</span>
          <span className={detailStyles.date}>PUBLISHED: {post.metadata.date}</span>
        </div>
        <h1 className={detailStyles.title}>{post.metadata.title}</h1>
        <p className={detailStyles.excerpt}>{post.metadata.excerpt}</p>
      </header>

      <div className={styles.layout}>
        <article className={detailStyles.article}>
          <MDXRemote source={post.content} />
        </article>

        <aside className={styles.sidebar}>
          <TerminalSection label="TABLE OF CONTENTS">
             <ul className={detailStyles.toc}>
               <li>01. THE CONSISTENCY DILEMMA</li>
               <li>02. OBSERVABILITY & MONITORING</li>
               <li>03. IMPLEMENTATION STRATEGIES</li>
               <li>04. CONCLUSION</li>
             </ul>
          </TerminalSection>

          <TerminalSection label="NEXT_ENTRIES">
            <div className={detailStyles.nextEntries}>
              <div className={detailStyles.nextEntry}>
                <span className={detailStyles.nextDate}>OCT 12, 2024</span>
                <p>Optimizing V8 Garbage Collection for Real-time Engines</p>
              </div>
              <div className={detailStyles.nextEntry}>
                <span className={detailStyles.nextDate}>SEP 28, 2024</span>
                <p>Securing Zero-Trust Networks with WireGuard</p>
              </div>
            </div>
          </TerminalSection>
        </aside>
      </div>
    </div>
  );
}
