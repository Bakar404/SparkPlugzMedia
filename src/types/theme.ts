/**
 * Theme Configuration Types
 *
 * This file contains TypeScript interfaces and types for the SparkPlugz Media
 * theme system, providing type safety and documentation for theme-related code.
 */

/**
 * Available theme modes
 */
export type ThemeMode = "light" | "dark";

/**
 * HSL color value representation
 * Format: "hue saturation% lightness%" (e.g., "205 100% 30%")
 */
export type HSLValue = string;

/**
 * Design token categories for the theme system
 */
export interface ThemeTokens {
  /** Primary surface colors */
  background: HSLValue;
  foreground: HSLValue;

  /** Elevated surfaces */
  card: HSLValue;
  cardForeground: HSLValue;

  /** Popover and overlay elements */
  popover: HSLValue;
  popoverForeground: HSLValue;

  /** Primary brand colors (Electric Blue) */
  primary: HSLValue;
  primaryForeground: HSLValue;

  /** Secondary action colors */
  secondary: HSLValue;
  secondaryForeground: HSLValue;

  /** Muted/disabled states */
  muted: HSLValue;
  mutedForeground: HSLValue;

  /** Accent colors */
  accent: HSLValue;
  accentForeground: HSLValue;

  /** Destructive/error states */
  destructive: HSLValue;
  destructiveForeground: HSLValue;

  /** Interface elements */
  border: HSLValue;
  input: HSLValue;
  ring: HSLValue;

  /** Layout */
  radius: string;
}

/**
 * Theme configuration structure
 */
export interface ThemeConfig {
  /** Theme identifier */
  mode: ThemeMode;

  /** Design tokens for this theme */
  tokens: ThemeTokens;

  /** Gradient definitions */
  gradients: {
    primary: string;
    secondary: string;
    hero: string;
  };

  /** Shadow and effect definitions */
  effects: {
    shadowGlow: string;
    transitionSmooth: string;
  };

  /** Sidebar-specific tokens */
  sidebar: {
    background: HSLValue;
    foreground: HSLValue;
    primary: HSLValue;
    primaryForeground: HSLValue;
    accent: HSLValue;
    accentForeground: HSLValue;
    border: HSLValue;
    ring: HSLValue;
  };
}

/**
 * Contrast ratio standards for accessibility
 */
export interface ContrastStandards {
  /** WCAG AA standard (4.5:1) */
  AA: number;

  /** WCAG AAA standard (7:1) */
  AAA: number;
}

/**
 * Contrast analysis result for a color pair
 */
export interface ContrastAnalysis {
  /** First color in HSL format */
  color1: HSLValue;

  /** Second color in HSL format */
  color2: HSLValue;

  /** Calculated contrast ratio */
  ratio: number;

  /** Meets WCAG AA standard */
  meetsAA: boolean;

  /** Meets WCAG AAA standard */
  meetsAAA: boolean;
}

/**
 * Theme context value for React components
 */
export interface ThemeContextValue {
  /** Current theme mode */
  mode: ThemeMode;

  /** Function to toggle between themes */
  toggleTheme: () => void;

  /** Function to set specific theme */
  setTheme: (mode: ThemeMode) => void;

  /** Whether system prefers dark mode */
  systemPrefersDark: boolean;
}

/**
 * Local storage configuration for theme persistence
 */
export interface ThemeStorage {
  /** Storage key for theme preference */
  key: string;

  /** Default theme if no preference stored */
  defaultTheme: ThemeMode;
}

/**
 * Constants for theme system
 */
export const THEME_CONSTANTS = {
  /** Local storage key */
  STORAGE_KEY: "spa:theme",

  /** CSS class for light theme */
  LIGHT_CLASS: "light",

  /** Default theme mode */
  DEFAULT_THEME: "dark" as ThemeMode,

  /** Transition duration for theme changes */
  TRANSITION_DURATION: "300ms",

  /** Contrast standards */
  CONTRAST: {
    AA: 4.5,
    AAA: 7.0,
  } as ContrastStandards,
} as const;

/**
 * Type guard to check if a string is a valid theme mode
 */
export function isValidThemeMode(value: string): value is ThemeMode {
  return value === "light" || value === "dark";
}

/**
 * Utility type for theme-aware component props
 */
export interface ThemeAwareProps {
  /** Optional theme override for component */
  theme?: ThemeMode;

  /** Whether component should respect system theme */
  respectSystemTheme?: boolean;
}
