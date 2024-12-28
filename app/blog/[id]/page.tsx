import { posts } from '@/data/posts';
import CommentSection from '@/components/CommentSection';

interface Props {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div className="prose max-w-none mb-12">
        {post.content}
      </div>
      <CommentSection postId={post.id} />
    </div>
  );
}