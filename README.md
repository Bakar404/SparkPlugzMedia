# SparkPlugz Media - Professional Web Application

> A modern, responsive web application built with React, TypeScript, and Tailwind CSS featuring a sophisticated dark/light theme system and electric blue branding.

## 🚀 Project Overview

**Live URL**: https://sparkplugzmedia.com

This is a professional web application for SparkPlugz Media, featuring:

- **Modern React Architecture** with TypeScript for type safety
- **Responsive Design** that works on all devices
- **Advanced Theme System** with dark mode default and accessibility compliance
- **Component-Based Structure** using shadcn/ui design system
- **Performance Optimized** with Vite bundling and optimizations

## 🛠️ Technology Stack

- **⚛️ React 18** - Modern React with hooks and functional components
- **📘 TypeScript** - Type-safe JavaScript with enhanced developer experience
- **⚡ Vite** - Fast build tool and development server
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 shadcn/ui** - High-quality, accessible component library
- **🔍 React Query** - Data fetching and state management
- **🛣️ React Router** - Client-side routing
- **🎯 Lucide React** - Beautiful SVG icons

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   │   ├── ThemeToggle.tsx   # Theme switching functionality
│   │   └── ...          # Other UI primitives
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Landing hero section
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Services showcase
│   ├── Work.tsx         # Portfolio/work display
│   └── Footer.tsx       # Site footer
├── pages/               # Page components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── assets/              # Static images and assets
└── index.css           # Global styles and design tokens
```

## 🎨 Design System & Theme Architecture

### Color Palette

The application uses an **Electric Blue** primary color with carefully crafted color tokens:

#### Dark Theme (Default)

- **Background**: `hsl(220 12% 6%)` - Deep navy
- **Foreground**: `hsl(210 40% 98%)` - Near white
- **Primary**: `hsl(205 100% 30%)` - Electric blue
- **Cards**: `hsl(220 9% 10%)` - Dark elevated surfaces

#### Light Theme

- **Background**: `hsl(0 0% 99%)` - Pure white
- **Foreground**: `hsl(220 12% 9%)` - Dark text
- **Primary**: `hsl(205 100% 25%)` - Darker electric blue
- **Cards**: `hsl(0 0% 100%)` - White elevated surfaces

### Accessibility Compliance

✅ **WCAG AAA Standards Met**

- All color combinations achieve 7:1+ contrast ratios
- Background/foreground: 18.35:1 (dark) / 17.65:1 (light)
- Primary colors: 7.27:1 (dark) / 9.17:1 (light)
- Full keyboard navigation support
- Screen reader optimized

## 🌓 Theme System Implementation

### Features

- **🌙 Dark Mode Default** - Better visual impact and modern UX
- **🔄 Persistent Preferences** - Theme choice saved in localStorage
- **⚡ Smooth Transitions** - 300ms eased transitions between themes
- **📱 System Integration** - Respects user preferences
- **♿ Accessibility First** - Proper ARIA labels and keyboard support

### Technical Implementation

The theme system uses CSS custom properties with a two-tier approach:

```css
/* Dark theme (default) */
:root {
  --background: 220 12% 6%;
  --foreground: 210 40% 98%;
  --primary: 205 100% 30%;
  /* ... other tokens */
}

/* Light theme (applied when .light class is present) */
.light {
  --background: 0 0% 99%;
  --foreground: 220 12% 9%;
  --primary: 205 100% 25%;
  /* ... overridden tokens */
}
```

### Theme Toggle Component

Located in `src/components/ui/ThemeToggle.tsx`, this component:

- Manages theme state with React hooks
- Persists preferences in localStorage (`spa:theme` key)
- Applies theme by toggling `.light` class on `document.documentElement`
- Provides accessible button with proper ARIA labels
- Uses Lucide icons (Sun/Moon) for visual feedback

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** package manager

### Local Development

#### Local IDE Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:8080 (or shown port)
```

#### Option 3: GitHub Codespaces

1. Navigate to the main page of your repository
2. Click "Code" button → "Codespaces" tab
3. Click "New codespace" to launch environment
4. Edit files directly and commit when done

#### Option 4: Direct GitHub Editing

1. Navigate to desired file(s)
2. Click "Edit" button (pencil icon)
3. Make changes and commit

### Available Scripts

```bash
npm run dev        # Start development server with hot reload
npm run build      # Build for production
npm run build:dev  # Build in development mode
npm run preview    # Preview production build locally
npm run lint       # Run ESLint for code quality
```

### Development Tools

The project includes several development utilities:

#### Contrast Checker

Run accessibility contrast analysis:

```bash
node scripts/contrast-check.cjs
```

This script analyzes all color token combinations and reports WCAG compliance levels.

## 🏗️ Component Architecture

### Page Components

- **`Index.tsx`** - Main landing page orchestrating all sections
- **`NotFound.tsx`** - 404 error page with navigation back to home

### Layout Components

- **`Header.tsx`** - Navigation header with responsive design
- **`Hero.tsx`** - Landing hero section with background imagery
- **`About.tsx`** - Company/service about section
- **`Services.tsx`** - Services showcase and features
- **`Work.tsx`** - Portfolio and case studies
- **`Footer.tsx`** - Site footer with links and contact info

### UI Components

Built on shadcn/ui foundation with custom styling:

- **`ThemeToggle.tsx`** - Theme switching functionality
- **`Button.tsx`** - Customizable button component
- **`Card.tsx`** - Content cards with consistent styling
- **`Input.tsx`** - Form inputs with validation styling
- And 30+ other UI primitives...

### Key Features

#### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Flexible grid layouts and typography scaling
- Touch-friendly interactive elements

#### Performance Optimizations

- **Vite bundling** - Fast builds and hot module replacement
- **Code splitting** - Automatic route-based code splitting
- **Asset optimization** - Image compression and lazy loading
- **CSS purging** - Unused styles removed in production

#### SEO & Accessibility

- Semantic HTML structure
- ARIA labels and roles where needed
- Keyboard navigation support
- Screen reader compatibility
- Fast loading times for better Core Web Vitals

## 🔧 Customization Guide

### Adding New Components

1. Create component in appropriate folder (`components/` or `components/ui/`)
2. Follow TypeScript interface patterns
3. Use Tailwind classes with design token references
4. Include proper accessibility attributes

Example:

```tsx
interface MyComponentProps {
  title: string;
  variant?: "primary" | "secondary";
}

export default function MyComponent({
  title,
  variant = "primary",
}: MyComponentProps) {
  return (
    <div
      className={`p-4 rounded-lg ${
        variant === "primary"
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground"
      }`}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}
```

### Extending the Theme

To add new color tokens:

1. Add to `src/index.css` in both `:root` and `.light` blocks
2. Update `tailwind.config.ts` to map the new tokens
3. Test contrast ratios with the contrast checker script
4. Update TypeScript types if needed

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `Header.tsx` if needed

## 🚀 Deployment

### Custom Domain Setup

1. Navigate to **Project** → **Settings** → **Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration steps

Read more: GitHub Docs – Configuring a custom domain for GitHub Pages

### Manual Deployment

For other hosting platforms:

```bash
# Build for production
npm run build

# The dist/ folder contains your built application
# Upload the contents to your hosting provider
```

The build outputs:

- Optimized JavaScript bundles
- Purged CSS (only used styles included)
- Compressed images and assets
- Generated sitemap and manifest files

## 📈 Performance Metrics

Current build statistics:

- **CSS Bundle**: ~11KB gzipped (62KB raw)
- **JS Bundle**: ~105KB gzipped (333KB raw)
- **Images**: Optimized JPEGs (70KB-153KB)
- **Build Time**: ~1.25 seconds

Performance features:

- Tree-shaking for minimal bundle size
- Automatic code splitting
- CSS purging removes unused styles
- Image optimization and compression

## 🔍 Troubleshooting

### Common Issues

**Dev server not starting**

```bash
# Check if port is in use
lsof -ti:8080
# Kill process if needed
kill -9 <PID>
```

**Theme not persisting**

- Check localStorage support in browser
- Verify `spa:theme` key is being set
- Check for JavaScript errors in console

**Build failures**

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Type errors**

```bash
# Run TypeScript checker
npx tsc --noEmit
```

### Development Tips

1. **Hot Reload**: Changes auto-refresh in development
2. **Console Logs**: Remove before production builds
3. **Accessibility**: Test with screen readers and keyboard navigation
4. **Mobile Testing**: Use browser dev tools for responsive testing
5. **Performance**: Monitor bundle size in build output

## 📄 License & Contributing

This project is built with modern web standards and best practices. When contributing:

1. Follow TypeScript strict mode guidelines
2. Maintain accessibility standards (WCAG AAA)
3. Test theme switching functionality
4. Run contrast checker for any color changes
5. Ensure responsive design on all viewports

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
