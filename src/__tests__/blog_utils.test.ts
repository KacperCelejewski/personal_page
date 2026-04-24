import { getBlogPosts, getBlogPost } from '../lib/blog';
import fs from 'fs';
import path from 'path';

// Mock fs and path
jest.mock('fs');
jest.mock('path');

describe('Blog Utilities', () => {
  const mockLocale = 'pl';
  const mockSlug = 'test-post';
  const mockContent = '---\ntitle: "Test Post"\ndate: "2024-01-01"\ncategory: "Test"\nexcerpt: "Test excerpt"\n---\nTest content';

  beforeEach(() => {
    jest.clearAllMocks();
    (path.join as jest.Mock).mockImplementation((...args) => args.join('/'));
  });

  describe('getBlogPosts', () => {
    it('should return empty array if locale directory does not exist', async () => {
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      const posts = await getBlogPosts(mockLocale);
      expect(posts).toEqual([]);
    });

    it('should return sorted posts if files exist', async () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readdirSync as jest.Mock).mockReturnValue(['post2.mdx', 'post1.mdx']);
      (fs.readFileSync as jest.Mock)
        .mockReturnValueOnce('---\ntitle: "Post 2"\ndate: "2024-01-02"\ncategory: "C2"\nexcerpt: "E2"\n---\nC2')
        .mockReturnValueOnce('---\ntitle: "Post 1"\ndate: "2024-01-01"\ncategory: "C1"\nexcerpt: "E1"\n---\nC1');

      const posts = await getBlogPosts(mockLocale);

      expect(posts).toHaveLength(2);
      expect(posts[0].metadata.title).toBe('Post 2'); // Sorted by date desc
      expect(posts[1].metadata.title).toBe('Post 1');
    });
  });

  describe('getBlogPost', () => {
    it('should return null if file does not exist', async () => {
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      const post = await getBlogPost(mockLocale, mockSlug);
      expect(post).toBeNull();
    });

    it('should return post content if file exists', async () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue(mockContent);

      const post = await getBlogPost(mockLocale, mockSlug);

      expect(post).not.toBeNull();
      expect(post?.metadata.title).toBe('Test Post');
      expect(post?.content.trim()).toBe('Test content');
    });
  });
});
