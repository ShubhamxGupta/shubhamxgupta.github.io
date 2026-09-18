export interface Reference {
    title: string;
    url: string;
}

export interface Post {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    coverImage: string;
    featured?: boolean;
    references?: Reference[];
    content: string; // Rich Markdown content
}

export const writings: Post[] = [
    {
        id: "composition-over-inheritance-ai",
        title: "Why I Treat AI Models as Stochastic Components, Not Magic",
        excerpt: "Moving beyond naive prompt engineering to build resilient, deterministic software architectures around probabilistic machine learning models.",
        date: "Dec 15, 2025",
        readTime: "6 min read",
        tags: ["AI Systems", "Architecture", "System Design"],
        coverImage: "/images/writing/ai-models-components.jpg",
        featured: true,
        references: [
            {
                title: "Outlines: Structured Text Generation (DotCSV)",
                url: "https://github.com/dottxt-ai/outlines",
            },
            {
                title: "Reliable Machine Learning in Practice (O'Reilly)",
                url: "https://www.oreilly.com/library/view/reliable-machine-learning/9781098106218/",
            },
            {
                title: "Pydantic V2: Typed Data Validation for Python",
                url: "https://docs.pydantic.dev/latest/",
            },
        ],
        content: `
# Why I Treat AI Models as Stochastic Components, Not Magic

In the rush to adopt generative AI, software teams frequently treat Large Language Models as omniscient black boxes. You inject unstructured prompt strings, cross your fingers, and pray the returned text adheres to your frontend's JSON parser.

In production engineering, this mindset creates fragile, non-deterministic systems that fail silently under edge conditions. 

When architecting AI-powered platforms, I treat models like any other **stochastic, high-latency component** in a distributed system — no different from an external third-party API that might drop packets, return malformed payloads, or drift semantically over time.

---

## 1. Enforce Rigid Interfaces Over Prompt Hopes

Instead of relying on multi-paragraph prompt instructions to format output, enforce strict structural schemas at the token generation boundary using JSON Schema or typed model validators like Pydantic.

\`\`\`python
from pydantic import BaseModel, Field
from typing import List, Optional

class ExtractedEntity(BaseModel):
    name: str = Field(description="Canonical entity name")
    category: str = Field(description="Entity classification")
    confidence_score: float = Field(ge=0.0, le=1.0)

class InferenceContract(BaseModel):
    entities: List[ExtractedEntity]
    reasoning_trace: Optional[str] = None
    execution_time_ms: float
\`\`\`

By coupling schema constraints with modern guided generation runtimes, you eliminate parse errors at the root layer rather than writing defensive regex checks after the fact.

---

## 2. Implement Resilient Circuit Breakers & Fallback Heuristics

Probabilistic models experience unpredictable latency spikes and occasional hallucination loops. A resilient architecture must never allow an upstream model failure to cascade into a service outage.

### Fallback Cascade Hierarchy:
1. **Primary Speculative Model**: Deep reasoning (e.g., GPT-4o, Claude 3.5 Sonnet) with a strict 2.5s SLA timeout.
2. **Fast Secondary Model**: High-throughput distilled model (e.g., Llama 3.2 3B, Mistral Nemo) executing on local CUDA instances.
3. **Deterministic Heuristic Engine**: Rule-based fallback or cached vector store resolution that guarantees 100% availability with 0ms inference overhead.

\`\`\`typescript
async function queryWithResilience<T>(
  prompt: string,
  schema: Schema<T>,
  timeoutMs = 2500
): Promise<T> {
  try {
    return await executePrimaryModel(prompt, schema, { timeoutMs });
  } catch (error) {
    console.warn("Primary inference degraded, falling back to distilled local model", error);
    try {
      return await executeLocalInference(prompt, schema);
    } catch (fallbackError) {
      console.error("Local inference failed, engaging deterministic heuristics", fallbackError);
      return executeDeterministicFallback(prompt);
    }
  }
}
\`\`\`

---

## 3. Observability & Semantic Drift Tracking

You wouldn't deploy a database cluster without tracking query latency, cache hit ratios, and connection pool saturation. Similarly, an AI system requires comprehensive telemetry:

- **Token Consumption & Cost per Session**: Granular attribution per user transaction.
- **Latency Percentiles (p95, p99)**: Monitoring time-to-first-token (TTFT) and total generation time.
- **Semantic Drift & Distribution Shift**: Continuously evaluating output embeddings against baseline validation sets to catch model degradation before end-users do.

Engineering AI systems is not about chasing the newest benchmark; it is about establishing deterministic boundaries around non-deterministic engines.
        `,
    },
    {
        id: "optimizing-react-for-ai",
        title: "Optimizing React for High-Frequency Telemetry & Data Streams",
        excerpt: "Lessons learned building real-time dashboards for neural network training visualization and microservice telemetry.",
        date: "Nov 02, 2025",
        readTime: "7 min read",
        tags: ["React", "Performance", "WebGL", "Real-Time"],
        coverImage: "/images/writing/react-high-frequency.jpg",
        featured: false,
        references: [
            {
                title: "React Concurrent Mode & Fiber Architecture",
                url: "https://react.dev/blog/2022/03/29/react-v18",
            },
            {
                title: "High Performance WebGL Canvas Rendering (MDN)",
                url: "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",
            },
            {
                title: "Designing Data-Intensive Applications (Martin Kleppmann)",
                url: "https://dataintensive.net/",
            },
        ],
        content: `
# Optimizing React for High-Frequency Telemetry & Data Streams

Visualizing live neural network training metrics or microservice cluster health involves handling hundreds of telemetry updates per second. 

When your data ingest pipeline pushes metrics at 60Hz or higher, standard React component state quickly falls apart. The reconciliation engine chokes on re-rendering schedules, garbage collection spikes occur, and the browser main thread drops frames.

Here is how we decoupled high-throughput data ingestion from React's rendering lifecycle to achieve 60 FPS under continuous load.

---

## The Problem: State Thrashing

The intuitive approach is to bind incoming WebSocket packets directly to component state:

\`\`\`tsx
// ANTI-PATTERN: Triggers 100+ re-renders/sec, freezing the UI thread
useEffect(() => {
  const socket = subscribeTelemetry((packet) => {
    setMetrics((prev) => [...prev, packet]);
  });
  return () => socket.disconnect();
}, []);
\`\`\`

At 100 packets per second:
- 100 virtual DOM trees generated per second
- Massive garbage collection pauses from array re-allocations
- Input handlers (typing, clicking, zooming) experience 200ms+ input latency

---

## The Solution: Mutable Buffering & RAF Synchronization

Instead of letting the network drive React's rendering loop, we buffer incoming metrics inside mutable references and synchronize the display layer using the browser's native \`requestAnimationFrame\`.

\`\`\`typescript
import { useRef, useEffect } from "react";

export function useTelemetryStream(socketUrl: string) {
  // 1. Ring buffer stored in ref (zero React re-renders on socket messages)
  const bufferRef = useRef<TelemetryPoint[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const socket = new WebSocket(socketUrl);
    
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Fast append to fixed-size ring buffer
      bufferRef.current.push(data);
      if (bufferRef.current.length > 2000) {
        bufferRef.current.shift();
      }
    };

    let animationFrameId: number;

    const renderLoop = () => {
      // 2. Direct Canvas/WebGL draw - bypassing Virtual DOM entirely
      if (canvasRef.current && bufferRef.current.length > 0) {
        drawTelemetryCanvas(canvasRef.current, bufferRef.current);
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      socket.close();
      cancelAnimationFrame(animationFrameId);
    };
  }, [socketUrl]);

  return { canvasRef };
}
\`\`\`

---

## Performance Results

By shifting continuous updates off React's reconciliation engine:
- **Main Thread CPU Utilization**: Dropped from 88% to under 14%
- **Frame Rate**: Locked at a consistent 60 FPS
- **Garbage Collection Frequency**: Reduced by 6.5x using recycled Float32Array buffers

When building telemetry and AI visualization tools, remember: **React is an orchestrator for application hierarchy and interactive controls, not a streaming byte renderer.**
        `,
    },
    {
        id: "ast-migration-tooling",
        title: "Automating UI Modernization: Engineering an XML-to-Compose AST Engine",
        excerpt: "How we engineered static analysis rules and Kotlin compiler AST transformations to automate legacy Android migration at Samsung PRISM.",
        date: "Jan 22, 2026",
        readTime: "8 min read",
        tags: ["Compiler Tools", "Kotlin", "Static Analysis", "Research"],
        coverImage: "/images/writing/ast-migration-compose.jpg",
        featured: false,
        references: [
            {
                title: "Kotlin Compiler Plugin API & PSI Structure",
                url: "https://kotlinlang.org/docs/compiler-plugins.html",
            },
            {
                title: "Android Jetpack Compose Migration Principles",
                url: "https://developer.android.com/develop/ui/compose/migrate",
            },
            {
                title: "Static Program Analysis (Anders Møller & Michael I. Schwartzbach)",
                url: "https://cs.au.dk/~amoeller/spa/",
            },
        ],
        content: `
# Automating UI Modernization: Engineering an XML-to-Compose AST Engine

Migrating large enterprise mobile codebases from imperative XML layouts to declarative Jetpack Compose is historically an arduous, error-prone manual undertaking.

During our research initiative at **Samsung PRISM**, our team was tasked with eliminating this friction: designing an automated migration tooling pipeline that translates legacy XML view trees into idiomatic, performant Jetpack Compose components while enforcing security guidelines.

---

## 1. Architectural Strategy: Syntax Trees Over Regex

Naive code translation often relies on regex search-and-replace. This breaks the moment you encounter nested namespaces, custom styled attributes, or complex constraint chains.

We built our engine upon **Abstract Syntax Tree (AST)** transformations:
1. **XML Parser & Schema Deserializer**: Ingesting Android layout XMLs into an internal Intermediate Representation (IR).
2. **Constraint Dependency Graph Solver**: Resolving \`ConstraintLayout\` anchor dependencies into equivalent Compose modifier chains (\`Modifier.constrainAs\`).
3. **Static Analysis & Security Inspector**: Intercepting hardcoded secrets, plain-text API credentials, or unsafe view attributes before emitting code.
4. **Kotlin Code Synthesis**: Emitting formatted, type-safe \`@Composable\` functions.

\`\`\`mermaid
graph LR
    A[Legacy XML Layout] --> B[AST Parser & IR]
    B --> C[Security Linter Rules]
    C --> D[Constraint Graph Solver]
    D --> E[Kotlin Compose Synthesizer]
    E --> F[Idiomatic @Composable]
\`\`\`

---

## 2. Preemptive Security Linting

One major challenge with legacy layouts was the presence of insecure attributes — such as exported debug flags or hardcoded credential references.

We embedded proactive Kotlin static analysis rules that flagged vulnerabilities during AST traversal:

\`\`\`kotlin
class SecurityAuditVisitor : XmlVisitor() {
    override fun visitAttribute(attribute: XmlAttribute) {
        val name = attribute.name
        val value = attribute.value ?: return

        // Detect hardcoded production keys or sensitive URLs
        if (name.contains("apiKey", ignoreCase = true) || 
            value.startsWith("sk_live_")) {
            reportVulnerability(
                severity = Severity.CRITICAL,
                message = "Sensitive credential detected in XML attribute: $name. Move to BuildConfig / Keystore."
            )
        }
    }
}
\`\`\`

---

## 3. Impact & Outcomes

- **40% Reduction in Migration Labor**: Teams could translate multi-screen workflows in seconds rather than hours.
- **Zero Critical Security Vulnerabilities**: Verified across thousands of lines of beta test code.
- **Deterministic Output**: Consistent, lint-compliant Jetpack Compose code that adheres to production team styling guidelines.
        `,
    },
    {
        id: "realtime-observability-distributed-systems",
        title: "Real-Time Telemetry & Distributed Observability at Scale",
        excerpt: "Architectural patterns for tracking inter-service latency, trace propagation, and failure modes across enterprise microservices.",
        date: "Feb 18, 2026",
        readTime: "7 min read",
        tags: ["Distributed Systems", "Telemetry", "Observability", "Backend"],
        coverImage: "/images/writing/realtime-observability.jpg",
        featured: false,
        references: [
            {
                title: "OpenTelemetry: High-Performance Distributed Tracing",
                url: "https://opentelemetry.io/",
            },
            {
                title: "Google Dapper: A Large-Scale Distributed Systems Tracing Infrastructure",
                url: "https://research.google/pubs/dapper-a-large-scale-distributed-systems-tracing-infrastructure/",
            },
            {
                title: "Site Reliability Engineering: How Google Runs Production Systems",
                url: "https://sre.google/sre-book/table-of-contents/",
            },
        ],
        content: `
# Real-Time Telemetry & Distributed Observability at Scale

In distributed microservice ecosystems, a single user click can trigger a cascade of dozens of inter-service RPC calls across authentication, inventory, pricing, and notification clusters.

When an end-user experiences a 400ms latency spike, pinpointing which node in the directed acyclic graph caused the degradation is impossible without contextual distributed tracing.

Working on real-time monitoring and visualization platforms at **Walmart Global Tech**, we designed telemetry systems focused on three core engineering pillars: context propagation, adaptive sampling, and zero-allocation tracing buffers.

---

## 1. W3C TraceContext Propagation

For an observability pipeline to connect disparate services, every network boundary must pass along distributed trace metadata:

\`\`\`
traceparent: 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01
            └─┘└──────────────────────────────┘└──────────────┘└─┘
          version          trace-id                 parent-id   flags
\`\`\`

In our asynchronous FastAPI and Node.js microservices, we ensured middleware automatically extracts and injects these headers into downstream requests:

\`\`\`python
from fastapi import Request, Response
import uuid

@app.middleware("http")
async def distributed_tracing_middleware(request: Request, call_next):
    trace_id = request.headers.get("X-Trace-ID", uuid.uuid4().hex)
    span_id = uuid.uuid4().hex[:16]
    
    # Attach to request context for structured logging
    request.state.trace_id = trace_id
    request.state.span_id = span_id

    response: Response = await call_next(request)
    response.headers["X-Trace-ID"] = trace_id
    return response
\`\`\`

---

## 2. Dynamic Head & Tail-Based Sampling

Recording 100% of telemetry traces in a system processing hundreds of thousands of queries per second produces unsustainable storage overhead and network saturation.

Instead, modern distributed systems employ **tail-based sampling**:
- **Happy Paths**: 99% of fast, 200 OK traces are summarized into statistical counters and discarded from full distributed storage.
- **Degraded Paths**: Any trace exhibiting latency > 500ms, HTTP 5xx codes, or unhandled exceptions is retained in full fidelity with all metadata and span annotations.

---

## 3. The Power of Visual Topological Maps

Metrics charts (CPU%, Memory usage) inform you *that* something is wrong; **topological trace maps** tell you *where* and *why*.

By rendering the active call graph in real-time with visual indicators of error rates and p99 bottlenecks, engineering teams can diagnose cascading failures before they impact customers at scale.
        `,
    },
];
