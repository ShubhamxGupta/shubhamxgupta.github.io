# Shubham Gupta - Engineering Authority Portfolio

![Portfolio Preview](/public/images/ui/ai-flow.png)

A high-performance, interactive portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Designed to showcase deep engineering expertise through technical case studies, essays, and a unique "hacker" aesthetic.

## 🚀 Key Features

### 🌟 Unique Interactions

- **MacOS-Style Dock**: Bottom navigation with "Push Physics" (neighbors move aside), localized magnification, and integrated Search trigger.
- **Target Box Cursor**: Custom "bracket" cursor that snaps to interactive elements (Dock, Socials) for a high-precision feel.
- **Hero Code Window**: A floating, 3D-tilted IDE window that "types" out your bio in Python (`engineer.py`), complete with syntax highlighting.
- **3D Project Carousel**: "Coverflow" style gallery for browsing projects with depth and focus effects.
- **Interactive Stacks**: "About Me" profile photos that stack like cards and fan out (spread wide) on hover.
- **Command Palette (`Cmd+K`)**: Global keyboard navigation for quick access to all sections.

### 📚 Content Sections

- **Case Studies**: Deep-dive engineering breakdowns (Problem, Constraints, Solution, Tradeoffs, Outcome) with technical specs.
- **Writing**: An editorial-style blog for technical essays and thoughts.
- **Now Page**: A personal dashboard tracking current focus, builds, and learning goals.
- **Projects**: 3D interactive showcase with "Star" GitHub integration.

### 🎨 Design & Tech

- **Typography System**: Professional pairing of **Outfit** (Sans) and **JetBrains Mono** (Code).
- **Engineered Visuals**: Live neural network simulation, floating 3D elements, and physics-based motion (Framer Motion).
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
