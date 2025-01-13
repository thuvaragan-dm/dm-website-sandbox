import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

// Resolve the Tailwind CSS configuration to access theme properties
const config = resolveConfig(tailwindConfig);
const breakpoints = config.theme.screens;
type BreakpointKey = keyof typeof breakpoints;

/**
 * Custom hook to determine if the screen size meets a specific breakpoint.
 * @param {K} breakpointKey - The key of the breakpoint to check.
 * @returns {Record<Key, boolean>} An object with a boolean indicating if the screen size meets the breakpoint.
 *
 * @example
 * const { isMd } = useBreakpoint('md');
 * if (isMd) {
 *   Screen width is at least the 'md' breakpoint size
 * }
 */

export function useBreakpoint<K extends BreakpointKey>(breakpointKey: K) {
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });

  // Capitalize the first letter of the breakpoint key to form a proper property name
  const key = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);

  type Key = `is${Capitalize<K>}`;

  return {
    [`is${key}`]: bool,
  } as Record<Key, boolean>;
}
