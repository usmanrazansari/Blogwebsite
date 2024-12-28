export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Blog</h3>
              <p className="text-gray-300">
                Sharing thoughts and ideas about technology, programming, and more.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-300 hover:text-white">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="text-gray-300 hover:text-white">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }