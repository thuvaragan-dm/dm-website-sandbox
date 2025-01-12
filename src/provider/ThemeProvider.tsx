"use client";
import { useSetInitialTheme, useTheme } from "@/store/themeStore";
import { cn } from "@/utilities/cn";
import { ComponentProps } from "react";

interface IThemeProvider extends ComponentProps<"div"> {}
const ThemeProvider = ({ children }: IThemeProvider) => {
  const { colorScheme } = useSetInitialTheme();
  const { theme, mode } = useTheme();

  return (
    <div
      className={cn(theme, {
        dark: mode === "system" && colorScheme && colorScheme.matches,
        light: mode === "system" && colorScheme && !colorScheme.matches,
        [mode]: mode !== "system",
      })}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
