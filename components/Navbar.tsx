export default function Navbar() {
    return (
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-gray-800">
                Blog
              </a>
            </div>
            
            <div className="hidden sm:flex sm:space-x-8">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Home
              </a>
              <a
                href="/blog"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Articles
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }