'use client';

import { useState } from 'react';

interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: string;
}

export default function Comments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !author.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
      author: author,
      createdAt: new Date().toISOString(),
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <div className="font-semibold">{comment.author}</div>
            <div className="text-gray-600">{comment.text}</div>
            <div className="text-sm text-gray-500">
              {new Date(comment.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}