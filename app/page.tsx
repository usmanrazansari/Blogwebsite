import Link from 'next/link';
import { posts } from '@/data/posts';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import About from '@/app/about/page';
export default function Home() {
  // Get the 3 most recent posts
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Exploring ideas, sharing knowledge, and connecting with readers through engaging content about web development and technology.
          </p>
          <Link href="/blog">
            <Button size="lg" variant="primary">
              View All Posts
            </Button>
          </Link>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Posts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest articles and insights about web development, programming, and technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="block"
            >
              <Card hover className="h-full">
                <Card.Header>
                  <Card.Title>{post.title}</Card.Title>
                  <p className="text-sm text-gray-500 mt-1">
                    {post.date}
                  </p>
                </Card.Header>
                <Card.Content>
                  <p className="text-gray-600">
                    {post.content.substring(0, 150)}...
                  </p>
                </Card.Content>
                <Card.Footer>
                  <Button variant="outline" size="sm">
                    Read More →
                  </Button>
                </Card.Footer>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="secondary" size="lg">
              See All Posts
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Read Our Blog?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes our content valuable for developers and tech enthusiasts.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'In-Depth Technical Content',
                description: 'Detailed articles that dive deep into technical concepts and practical implementations.'
              },
              {
                title: 'Latest Technologies',
                description: 'Stay updated with the newest frameworks, tools, and best practices in web development.'
              },
              {
                title: 'Community Driven',
                description: 'Join discussions and share your insights with fellow developers in the comments.'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <Card.Title>{feature.title}</Card.Title>
                <Card.Content>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center max-w-2xl mx-auto">
          <Card.Title>Subscribe to Our Newsletter</Card.Title>
          <Card.Content>
            <p className="text-gray-600 mb-4">
              Get the latest posts and updates delivered directly to your inbox.
            </p>
            <form className="flex gap-2 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </form>
          </Card.Content>
        </Card>
      </section>
    </div>
  );
}