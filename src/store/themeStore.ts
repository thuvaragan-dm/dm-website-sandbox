import cookieKeys from "@/configs/cookieKeys";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { create } from "zustand";

type Mode = "dark" | "light" | "system";

interface ThemeState {
  states: {
    theme: string;
    mode: Mode;
  };
  actions: {
    setTheme: (value: string) => void;
    setMode: (value: Mode) => void;
  };
}

const useThemeStore = create<ThemeState>()((set) => ({
  states: {
    mode: "light",
    theme: "dm",
  },

  actions: {
    setTheme: (value) =>
      set(({ states }) => ({
        states: {
          ...states,
          theme: value,
        },
      })),

    setMode: (value) =>
      set(({ states }) => {
        Cookie.set(cookieKeys.COLOR_MODE, value);
        return {
          states: {
            ...states,
            mode: value,
          },
        };
      }),
  },
}));

export const useTheme = () => useThemeStore((state) => state.states);

export const useThemeActions = () => useThemeStore((state) => state.actions);

export const useSetInitialTheme = () => {
  const { setMode } = useThemeActions();
  const [colorScheme, setColorScheme] = useState<MediaQueryList | null>(null);

  useEffect(() => {
    setMode(Cookie.get(cookieKeys.COLOR_MODE) as Mode);
    setColorScheme(window.matchMedia("(prefers-color-scheme: dark)"));
  }, [setMode]);

  useEffect(() => {
    const handleChange = () => {
      setColorScheme(window.matchMedia("(prefers-color-scheme: dark)"));
    };

    colorScheme?.addEventListener("change", handleChange);

    // Cleanup event listener when the component unmounts or colorScheme changes
    return () => {
      colorScheme?.removeEventListener("change", handleChange);
    };
  }, [colorScheme]);

  return { colorScheme };
};
