import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ui/ThemeToggle";

/**
 * React Query client configuration
 * Handles global data fetching, caching, and synchronization
 */
const queryClient = new QueryClient();

/**
 * App Component - Root Application Component
 *
 * This is the main application component that sets up the core providers
 * and routing structure for the SparkPlugz Media website.
 *
 * Architecture:
 * - QueryClientProvider: Enables React Query for data fetching
 * - TooltipProvider: Provides tooltip context for shadcn/ui components
 * - Global toast notifications (dual implementation for flexibility)
 * - ThemeToggle: Renders the theme switching UI
 * - BrowserRouter: Enables client-side routing
 *
 * Routing Structure:
 * - "/" - Main landing page with all sections
 * - "*" - Catch-all route for 404 handling
 *
 * Global UI Elements:
 * - Toast notifications for user feedback
 * - Theme toggle button (bottom-right floating)
 * - Tooltip system for enhanced UX
 *
 * @returns JSX.Element - The complete application structure
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Global notification systems */}
      <Toaster />
      <Sonner />

      {/* Global theme toggle - appears on all pages */}
      <ThemeToggle />

      {/* Client-side routing */}
      {/* Use project subpath only on GitHub Pages; root on custom domain */}
      <BrowserRouter
        basename={
          window.location.hostname.endsWith("github.io")
            ? "/SparkPlugzMedia"
            : "/"
        }
      >
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<Index />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

          {/* 404 fallback for unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
