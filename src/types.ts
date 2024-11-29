declare global {
  type Theme = "light" | "dark" | "system";

  type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
  };
}
