# SparkPlugz Media - Development Guide

## 🏗️ Architecture Overview

This project follows modern React development practices with a component-based architecture, TypeScript for type safety, and a sophisticated theme system.

### Project Structure Deep Dive

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI primitives (shadcn/ui)
│   │   ├── ThemeToggle.tsx   # Theme switching component
│   │   ├── button.tsx        # Base button component
│   │   ├── card.tsx          # Card layout component
│   │   └── ...              # 30+ other UI primitives
│   ├── Header.tsx       # Site navigation and branding
│   ├── Hero.tsx         # Landing hero with background image
│   ├── About.tsx        # Company information section
│   ├── Services.tsx     # Services showcase
│   ├── Work.tsx         # Portfolio and case studies
│   └── Footer.tsx       # Site footer with links
├── pages/               # Page-level components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
│   ├── use-mobile.tsx   # Mobile detection hook
│   └── use-toast.ts     # Toast notification hook
├── lib/                 # Utility functions
│   └── utils.ts         # Tailwind utility functions
├── types/               # TypeScript type definitions
│   └── theme.ts         # Theme system types
├── assets/              # Static images and assets
│   ├── hero-image.jpg   # Main hero background
│   ├── team-image.jpg   # Team/about section image
│   └── equipment-image.jpg # Equipment/services image
└── index.css           # Global styles and design tokens
```

### Key Dependencies

```json
{
  "react": "^18.x", // Core React library
  "typescript": "^5.x", // Type safety
  "vite": "^5.x", // Build tool and dev server
  "tailwindcss": "^3.x", // Utility-first CSS
  "@radix-ui/react-*": "^1.x", // Accessible UI primitives
  "lucide-react": "^0.x", // SVG icon library
  "react-router-dom": "^6.x", // Client-side routing
  "@tanstack/react-query": "^5.x" // Data fetching
}
```

## 🎨 Theme System Deep Dive

### Design Philosophy

The theme system is built around the concept of **semantic color tokens** rather than fixed color values. This allows for consistent theming while maintaining flexibility.

#### Color Token Structure

```css
/* Semantic naming convention */
--background        /* Primary surface color */
--foreground        /* Primary text color */
--card             /* Elevated surface color */
--card-foreground  /* Text on elevated surfaces */
--primary          /* Brand/action color */
--primary-foreground /* Text on primary color */
--secondary        /* Secondary action color */
--muted            /* Disabled/inactive elements */
--destructive      /* Error/warning states */
--border           /* Border colors */
--ring             /* Focus indicators */
```

#### Theme Implementation

The theme system uses a **cascade override** approach:

1. **`:root`** contains dark theme tokens (default)
2. **`.light`** class overrides specific tokens for light mode
3. **ThemeToggle** component manages the `.light` class application

```css
/* Dark theme (default) */
:root {
  --primary: 205 100% 30%; /* Darker blue for contrast */
}

/* Light theme override */
.light {
  --primary: 205 100% 25%; /* Even darker for light backgrounds */
}
```

#### Accessibility Compliance

All color combinations are tested to meet **WCAG AAA standards** (7:1 contrast ratio):

- **Dark Theme**: Background/text = 18.35:1, Primary = 7.27:1
- **Light Theme**: Background/text = 17.65:1, Primary = 9.17:1

Use the contrast checker to validate new colors:

```bash
node scripts/contrast-check.cjs
```

### Adding New Theme Tokens

1. **Define in CSS**: Add to both `:root` and `.light` blocks

```css
:root {
  --new-token: 200 50% 30%;
}
.light {
  --new-token: 200 50% 70%;
}
```

2. **Map in Tailwind**: Update `tailwind.config.ts`

```javascript
colors: {
  'new-color': 'hsl(var(--new-token))',
}
```

3. **Add TypeScript types**: Update `src/types/theme.ts`

```typescript
interface ThemeTokens {
  newToken: HSLValue;
}
```

4. **Test contrast**: Run contrast checker and adjust if needed

## 🧩 Component Development

### Component Patterns

#### 1. Functional Components with TypeScript

```tsx
interface ComponentProps {
  title: string;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export default function MyComponent({
  title,
  variant = "primary",
  children,
}: ComponentProps) {
  return (
    <div
      className={cn(
        "base-styles",
        variant === "primary" && "primary-styles",
        variant === "secondary" && "secondary-styles"
      )}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

#### 2. Theme-Aware Styling

Use semantic color tokens instead of hardcoded colors:

```tsx
// ✅ Good - Uses semantic tokens
<button className="bg-primary text-primary-foreground">
  Click me
</button>

// ❌ Bad - Hardcoded colors
<button className="bg-blue-500 text-white">
  Click me
</button>
```

#### 3. Responsive Design

Follow mobile-first approach with Tailwind breakpoints:

```tsx
<div
  className="
  p-4 
  md:p-6 
  lg:p-8 
  text-sm 
  md:text-base 
  lg:text-lg
"
>
  Responsive content
</div>
```

### State Management Patterns

#### 1. Local State with useState

```tsx
const [isOpen, setIsOpen] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  email: "",
});
```

#### 2. Server State with React Query

```tsx
import { useQuery } from "@tanstack/react-query";

function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
```

#### 3. Theme State with Context

```tsx
const { mode, toggleTheme } = useTheme();
```

## 🔧 Development Workflow

### Local Development Setup

1. **Environment Setup**

```bash
# Install Node.js 18+ (recommended via nvm)
nvm install --lts
nvm use --lts

# Clone and setup
git clone <repository-url>
cd sparkplugz-media
npm install
```

2. **Development Server**

```bash
npm run dev          # Start with hot reload
npm run dev --host   # Expose to network
```

3. **Code Quality**

```bash
npm run lint         # ESLint checking
npx tsc --noEmit     # TypeScript checking
node scripts/contrast-check.cjs  # Accessibility checking
```

### Build and Deployment

1. **Production Build**

```bash
npm run build        # Optimized production build
npm run preview      # Preview production build locally
```

2. **Build Analysis**

```bash
# Bundle analyzer (if configured)
npm run build:analyze

# Manual size checking
ls -la dist/assets/
```

### Testing Strategy

#### 1. Visual Testing

- Test all components in both light and dark themes
- Verify responsive behavior across breakpoints
- Check accessibility with screen readers

#### 2. Contrast Testing

```bash
# Run automated contrast checking
node scripts/contrast-check.cjs

# Manual testing with browser dev tools
# - Use accessibility tab
# - Test keyboard navigation
# - Verify focus indicators
```

#### 3. Performance Testing

- Monitor bundle sizes in build output
- Test loading times on slower connections
- Verify Core Web Vitals scores

## 🎯 Best Practices

### 1. Code Organization

```tsx
// Component file structure
import React from 'react';          // External libraries first
import { Button } from '@/components/ui/button';  // Internal UI components
import { useTheme } from '@/hooks/use-theme';      // Custom hooks
import { cn } from '@/lib/utils';                  // Utilities
import './component.css';                          // Styles (if needed)

// Types at top
interface Props {
  // ...
}

// Component with proper JSDoc
/**
 * Component description
 * @param props - Component props
 * @returns JSX.Element
 */
export default function Component(props: Props) {
  // Hooks first
  const { theme } = useTheme();

  // Event handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    // ...
  );
}
```

### 2. Styling Guidelines

```css
/* Use semantic tokens */
.component {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--border));
}

/* Avoid hardcoded values */
.component {
  /* ❌ Bad */
  background: #1a1a1a;
  color: #ffffff;

  /* ✅ Good */
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

### 3. Accessibility Checklist

- [ ] All interactive elements have focus indicators
- [ ] Color combinations meet WCAG AAA standards
- [ ] Images have descriptive alt text
- [ ] Forms have proper labels and validation
- [ ] Semantic HTML structure is used
- [ ] Keyboard navigation works throughout
- [ ] Screen reader compatibility is tested

### 4. Performance Optimization

```tsx
// Lazy load components
const LazyComponent = lazy(() => import("./Component"));

// Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// Optimize images
<img
  src="/image.jpg"
  alt="Description"
  loading="lazy"
  width={800}
  height={600}
/>;
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Theme Not Applying

```bash
# Check localStorage
localStorage.getItem('spa:theme')

# Verify CSS class application
document.documentElement.classList.contains('light')

# Check console for JavaScript errors
```

#### 2. Build Failures

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .vite
npm install

# Check for TypeScript errors
npx tsc --noEmit

# Verify imports are correct
```

#### 3. Styling Issues

```bash
# Check Tailwind compilation
npm run build:dev

# Verify CSS variables are defined
# Open DevTools → Elements → Computed styles
```

### Debug Tools

1. **React Developer Tools** - Component inspection
2. **Accessibility Insights** - Accessibility testing
3. **Lighthouse** - Performance and best practices
4. **Contrast checker script** - Color accessibility

## 📚 Additional Resources

- **shadcn/ui docs**: https://ui.shadcn.com/
- **Tailwind CSS docs**: https://tailwindcss.com/docs
- **React docs**: https://react.dev/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **TypeScript docs**: https://www.typescriptlang.org/docs/

---

**Happy coding! 🚀**
