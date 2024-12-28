import Link from 'next/link';
import { posts } from '@/data/posts';
import BlogCard from '@/components/BlogCard';

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Blog Posts</h1>
        <Link 
          href="/blog/new"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Post
        </Link>
      </div>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}