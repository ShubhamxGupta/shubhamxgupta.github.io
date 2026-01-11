# Shubham Gupta - Engineering Authority Portfolio

![Portfolio Preview](/public/images/ui/ai-flow.png)

A high-performance, interactive portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Designed to showcase deep engineering expertise through technical case studies, essays, and a unique "hacker" aesthetic.

## 🚀 Key Features

### 🌟 Unique Interactions

- **Command Palette (`Cmd+K`)**: A global "Omnibar" for keyboard-first navigation, quick actions, and external links.
- **Spotlight Cursor**: A high-precision, tactile ambient light that follows the mouse, offering physical feedback on click.
- **Interactive Terminal**: A functional CLI (bottom-right) for a developer-centric experience.

### 📚 Content Sections

- **Case Studies**: Deep-dive engineering breakdowns (Problem, Constraints, Solution, Tradeoffs, Outcome) with technical specs.
- **Writing**: An editorial-style blog for technical essays and thoughts.
- **Now Page**: A personal dashboard tracking current focus, builds, and learning goals.
- **Projects**: Showcase of work with "Star" GitHub integration and tech stack details.

### 🎨 Design & Tech

- **Typography System**: Professional pairing of **Outfit** (Sans) and **JetBrains Mono** (Code).
- **Engineered Visuals**: Live neural network simulation (Canvas), 3D tilt effects, and smooth animations.
- **SEO Optimized**: JSON-LD structured data for Person/Profile validation.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Interactions**: [cmdk](https://github.com/pacocoursey/cmdk) (Command Palette)
- **Formatting**: [react-markdown](https://github.com/remarkjs/react-markdown) for content rendering
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form + EmailJS
- **Type Safety**: STRICT TypeScript

## 🏃‍♂️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/ShubhamxGupta/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

## 📝 Configuration

All content is managed via strictly typed data files in `src/data/`:

- **Projects**: `src/data/projects.ts`
- **Case Studies**: `src/data/caseStudies.ts`
- **Writing/Essays**: `src/data/writings.ts`
- **Experience**: `src/data/experience.ts`

## 📄 License

MIT © [Shubham Gupta](https://github.com/ShubhamxGupta)
