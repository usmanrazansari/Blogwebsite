import Link from 'next/link';
import { Post } from '@/data/posts';

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="p-6 border rounded-lg hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-2">{post.content.substring(0, 150)}...</p>
        <p className="text-sm text-gray-500">{post.date}</p>
      </div>
    </Link>
  );
}