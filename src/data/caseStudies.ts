export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  role: string;
  timeline: string;
  tags: string[];
  heroImage?: string;
  problem: string;
  constraints: string[];
  architecture?: string; // Markdown or description
  solution: string; // Detailed technical solution
  tradeoffs: {
    decision: string;
    pros: string;
    cons: string;
  }[];
  outcome: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "xml-to-compose-migration",
    title: "Automated XML to Jetpack Compose Migration",
    description: "Architecting a secure, automated migration tool to modernize legacy Android UI codebases at scale.",
    role: "Team Lead & Lead Researcher",
    timeline: "Aug 2025 - Present",
    tags: ["Kotlin", "Static Analysis", "AST Parsing", "Android", "Security"],
    problem:
      "The organization faced a massive debt of legacy XML-based Android layouts. Manual migration to Jetpack Compose was slow, error-prone, and risked introducing security vulnerabilities. The goal was to reduce migration time by 40% while ensuring zero security regressions.",
    constraints: [
      "Zero tolerance for security regressions (hardcoded secrets, PII exposure).",
      "Must support complex, nested XML structures.",
      "The generated Compose code had to be idiomatic and maintainable, not just a 1-to-1 translation.",
      "Limited team size (4 developers) with a strict beta release deadline."
    ],
    solution:
      "Designed a two-stage migration pipeline. \n\n**Stage 1: Static Analysis & Security Interception**\nBuilt a custom static analyzer in Kotlin that parses XML ASTs before conversion. It applies a rule set to detect pre-existing vulnerabilities (e.g., hardcoded API keys, insecure input types). If a vulnerability is found, the migration halts with a detailed report, preventing the 'garbage-in-garbage-out' problem.\n\n**Stage 2: Semantic Mapping**\nInstead of direct tag-to-composable mapping, we implemented an intermediate semantic layer. This allows capturing intent (e.g., 'a button with a shadow') rather than just properties, enabling us to generate themable Compose components compliant with the new design system.",
    tradeoffs: [
      {
        decision: "Custom AST Parser vs. Regex",
        pros: "Context-aware parsing, significantly fewer false positives, handles nested structures robustly.",
        cons: "Higher initial development effort and complexity.",
      },
      {
        decision: "Halting on Security Errors",
        pros: "Guarantees no migrated code has legacy vulnerabilities. Enforces security-first culture.",
        cons: "Frustrates developers if legacy code is very messy; specific 'ignore' flags had to be implemented.",
      },
    ],
    outcome: [
      "Reduced UI modernization effort by ~40% in initial benchmarks.",
      "Zero critical vulnerabilities found in the beta release code.",
      "Successfully handled complex nested layouts that failed with standard open-source converters.",
    ],
  },
];
