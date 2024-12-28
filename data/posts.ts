export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

export const posts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    date: '2024-03-15',
    content: `Next.js 14 introduces groundbreaking features that revolutionize React development. The new App Router, built on React Server Components, offers an intuitive way to create complex applications with better performance and developer experience.

    Key features include:
    • Server Components as the default
    • Simplified data fetching with async components
    • Built-in SEO optimizations
    • Enhanced caching mechanisms
    
    For beginners, starting with Next.js is straightforward. First, create a new project:
    \`\`\`
    npx create-next-app@latest my-app
    \`\`\`
    
    This sets up everything you need, including TypeScript, ESLint, and Tailwind CSS support. The new App Router structure makes routing more intuitive than ever before.`,
  },
  {
    id: '2',
    title: 'Mastering TypeScript: Best Practices for 2024',
    date: '2024-03-14',
    content: `TypeScript continues to grow in popularity, and for good reason. It adds type safety to JavaScript while providing excellent developer tooling. Here are some essential practices for 2024:

    1. Use Strict Mode
    Always enable strict mode in your tsconfig.json:
    \`\`\`
    {
      "compilerOptions": {
        "strict": true
      }
    }
    \`\`\`

    2. Leverage Type Inference
    TypeScript is smart enough to infer types in many cases. Don't over-annotate when unnecessary:
    \`\`\`
    // Good
    const numbers = [1, 2, 3];
    
    // Unnecessary
    const numbers: number[] = [1, 2, 3];
    \`\`\`

    3. Use Discriminated Unions
    They're perfect for handling different states in your application:
    \`\`\`
    type State =
      | { status: 'loading' }
      | { status: 'success', data: string }
      | { status: 'error', error: Error }
    \`\`\``,
  },
  {
    id: '3',
    title: 'Modern CSS Techniques You Should Know',
    date: '2024-03-13',
    content: `CSS has evolved significantly in recent years. Here are some modern techniques that every developer should be familiar with:

    1. CSS Grid and Flexbox
    The combination of Grid and Flexbox gives you a powerful layout system:
    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }
    \`\`\`

    2. CSS Custom Properties
    Variables in CSS are game-changing for theme customization:
    \`\`\`css
    :root {
      --primary-color: #3490dc;
      --secondary-color: #ffed4a;
    }
    
    .button {
      background: var(--primary-color);
    }
    \`\`\`

    3. Modern CSS Reset
    Start your projects with a modern reset that preserves useful defaults while fixing common issues.`,
  },
  {
    id: '4',
    title: 'Building Accessible Web Applications',
    date: '2024-03-12',
    content: `Accessibility isn't just a nice-to-have—it's essential. Here's how to make your web applications more accessible:

    1. Semantic HTML
    Use the right HTML elements for their intended purpose:
    \`\`\`html
    <!-- Bad -->
    <div class="button" onclick="submit()">Submit</div>
    
    <!-- Good -->
    <button type="submit">Submit</button>
    \`\`\`

    2. ARIA Labels
    Add context where visual design isn't enough:
    \`\`\`html
    <button aria-label="Close menu" class="icon-button">
      <svg>...</svg>
    </button>
    \`\`\`

    3. Keyboard Navigation
    Ensure all interactive elements are keyboard accessible and have visible focus states.`,
  },
  {
    id: '5',
    title: 'State Management in 2024: Beyond Redux',
    date: '2024-03-11',
    content: `The state management landscape has evolved significantly. While Redux remains popular, new solutions offer simpler alternatives:

    1. React Query / TanStack Query
    Perfect for server state management:
    \`\`\`typescript
    const { data, isLoading } = useQuery({
      queryKey: ['todos'],
      queryFn: fetchTodos,
    });
    \`\`\`

    2. Zustand
    A minimal state management solution:
    \`\`\`typescript
    const useStore = create((set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }));
    \`\`\`

    3. Jotai
    Atomic state management that's perfect for React:
    \`\`\`typescript
    const countAtom = atom(0);
    const Counter = () => {
      const [count, setCount] = useAtom(countAtom);
      return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
    };
    \`\`\``,
  },
  {
    id: '6',
    title: 'Performance Optimization in React Applications',
    date: '2024-03-10',
    content: `Optimizing React applications is crucial for providing a great user experience. Here are key strategies:

    1. Code Splitting
    Use dynamic imports to split your code:
    \`\`\`typescript
    const MyComponent = dynamic(() => import('./MyComponent'), {
      loading: () => <Loading />
    });
    \`\`\`

    2. Memoization
    Use React.memo and useMemo wisely:
    \`\`\`typescript
    const ExpensiveComponent = React.memo(({ data }) => {
      const processedData = useMemo(() => {
        return expensiveOperation(data);
      }, [data]);
      
      return <div>{processedData}</div>;
    });
    \`\`\`

    3. Image Optimization
    In Next.js, use the Image component:
    \`\`\`typescript
    import Image from 'next/image';
    
    function MyImage() {
      return (
        <Image
          src="/my-image.jpg"
          alt="Description"
          width={500}
          height={300}
        />
      );
    }
    \`\`\``,
  }
];