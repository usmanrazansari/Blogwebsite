import { posts } from '@/data/posts';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Generate a new ID (in a real app, this would be handled by a database)
    const newId = (posts.length + 1).toString();
    
    // Create new post
    const newPost = {
      id: newId,
      title: body.title,
      content: body.content,
      date: body.date,
    };
    
    // Add to posts array (in a real app, this would be saved to a database)
    posts.push(newPost);
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}