// src/hooks/useTheme.ts
import { useThemeContext } from '../context/themeContext';

export const useTheme = () => {
  return useThemeContext();
};