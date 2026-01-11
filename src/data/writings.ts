export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string; // Markdown content
}

export const writings: Post[] = [
  {
    id: "composition-over-inheritance-ai",
    title: "Why I Treat AI Models as Components, Not Magic",
    excerpt: "Moving beyond the 'black box' mentality to engineering robust, composable AI systems.",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    tags: ["AI Engineering", "System Design", "Philosophy"],
    content: `
# Why I Treat AI Models as Components, Not Magic

In the rush to adopt LLMs, many engineering teams treat models as magical black boxes. You throw text in, you get text out. 
But this leads to fragile, non-deterministic systems.

As an AI Engineer, I argue for treating models like any other stochastic component in a distributed system.

## 1. Define Interfaces, Not Prompts
Instead of endless prompt engineering, wrap your LLM calls in strict, typed interfaces. Use tools like Pydantic (in Python) or Zod (in JS) to enforce structure on the output.

## 2. Fail Gracefully
LLMs hallucinate. Your system shouldn't crash when they do. Implement circuit breakers and fallback logic. If the high-intelligence model fails or times out, fall back to a faster, cheaper model or a heuristic rule.

## 3. Observability is Mandatory
You wouldn't deploy a database without monitoring. Don't deploy an LLM without tracing. Track token usage, latency, and most importantly, semantic drift over time.

...
    `,
  },
  {
    id: "optimizing-react-for-ai",
    title: "Optimizing React for High-Frequency Data Streams",
    excerpt: "Lessons learned building real-time dashboards for neural network training visualization.",
    date: "Nov 02, 2025",
    readTime: "7 min read",
    tags: ["React", "Performance", "Visualization"],
    content: `
# Optimizing React for High-Frequency Data Streams

Visualizing neural network training in real-time involves rendering thousands of data points per second. 
React's standard reconciliation process can choke on this if not managed correctly.

## The Problem
Using \`useState\` for every socket message triggers a re-render. At 60Hz updates, this kills the UI thread.

## The Solution: Refs and Throttling
We moved the high-frequency state into \`useRef\` (mutable, no re-render) and created a throttled loop using \`requestAnimationFrame\` to sync the UI only when necessary.

\`\`\`typescript
const dataRef = useRef([]);

useEffect(() => {
  const socket = subscribe((data) => {
    dataRef.current.push(data);
  });
  
  let animationFrameId;
  const loop = () => {
    // Batch update canvas/webgl directly
    updateChart(dataRef.current); 
    animationFrameId = requestAnimationFrame(loop);
  };
  loop();
  
  return () => cancelAnimationFrame(animationFrameId);
}, []);
\`\`\`

This approach decouples data ingestion from rendering, keeping the UI buttery smooth even under heavy load.
    `,
  },
];
