import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Local storage key for persisting theme preference
 * Uses 'spa:' prefix to avoid conflicts with other applications
 */
const STORAGE_KEY = "spa:theme";

/**
 * ThemeToggle Component
 *
 * A floating action button that allows users to switch between light and dark themes.
 * The component manages theme state, persists user preferences, and provides
 * accessible controls with proper ARIA labels.
 *
 * Features:
 * - Defaults to dark mode for better visual impact
 * - Persists theme preference in localStorage
 * - Smooth transitions between theme changes
 * - Accessible with keyboard navigation and screen readers
 * - Uses semantic icons (Sun for light mode, Moon for dark mode)
 *
 * Technical Implementation:
 * - Toggles '.light' class on document.documentElement
 * - Dark theme is the default (:root contains dark tokens)
 * - Light theme overrides with .light selector in CSS
 *
 * @returns JSX.Element - The theme toggle button component
 */
export default function ThemeToggle() {
  /**
   * Theme state management
   * Initializes based on localStorage value or defaults to dark mode
   * Uses lazy initialization to avoid SSR hydration issues
   */
  const [isLight, setIsLight] = useState<boolean>(() => {
    // SSR safety check
    if (typeof window === "undefined") return false;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored === "light";

    // Default to dark mode for better visual impact
    return false;
  });

  /**
   * Effect hook to apply theme changes to DOM and persist preferences
   * Runs whenever isLight state changes
   */
  useEffect(() => {
    const root = document.documentElement;

    if (isLight) {
      // Apply light theme by adding .light class
      root.classList.add("light");
    } else {
      // Apply dark theme by removing .light class (falls back to :root)
      root.classList.remove("light");
    }

    // Persist theme preference for future visits
    localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <button
      // Accessibility attributes
      aria-label="Toggle theme"
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      // Theme toggle handler
      onClick={() => setIsLight((v) => !v)}
      // Styling: Fixed position bottom-right with backdrop blur and hover effects
      className="fixed bottom-4 right-4 z-50 p-2 rounded bg-card/80 backdrop-blur hover:scale-105 transition-transform"
    >
      {/* Conditional icon rendering based on current theme */}
      {isLight ? <Moon /> : <Sun />}
    </button>
  );
}
