export default function About() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About This Blog</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to my blog! This space is dedicated to sharing insights, tutorials, and discussions about web development, programming, and technology. 
          My goal is to provide valuable content that helps developers of all levels enhance their skills and stay updated with the latest trends in the industry.
        </p>
        
        <h2 className="text-3xl font-bold mb-4">Who Am I?</h2>
        <p className="text-lg text-gray-700 mb-6">
          I am a passionate web developer with experience in building modern web applications using technologies like React, Next.js, and TypeScript. 
          I love sharing knowledge and helping others grow in their coding journey.
        </p>
  
        <h2 className="text-3xl font-bold mb-4">What You Can Expect</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="text-lg text-gray-700">In-depth tutorials on various web development topics.</li>
          <li className="text-lg text-gray-700">Tips and tricks to improve your coding skills.</li>
          <li className="text-lg text-gray-700">Updates on the latest technologies and frameworks.</li>
          <li className="text-lg text-gray-700">Personal insights and experiences from my journey as a developer.</li>
        </ul>
  
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          I would love to hear from you! Feel free to reach out through the comments section on my posts or connect with me on social media.
        </p>
  
        <h2 className="text-3xl font-bold mb-4">Follow Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          You can find me on:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li className="text-lg text-gray-700">
            <a href="https://twitter.com" className="text-blue-500 hover:underline">Twitter</a>
          </li>
          <li className="text-lg text-gray-700">
            <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a>
          </li>
          <li className="text-lg text-gray-700">
            <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a>
          </li>
        </ul>
      </main>
    );
  }