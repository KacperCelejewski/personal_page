import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getBlogPosts(locale: string) {
  const localeDir = path.join(contentDirectory, locale);
  if (!fs.existsSync(localeDir)) return [];

  const files = fs.readdirSync(localeDir);

  const posts = files.map((filename) => {
    const filePath = path.join(localeDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace('.mdx', ''),
      metadata: data,
      content,
    };
  });

  return posts.sort((a: any, b: any) => (new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()));
}

export async function getBlogPost(locale: string, slug: string) {
  const filePath = path.join(contentDirectory, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    metadata: data,
    content,
  };
}
