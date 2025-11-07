export const lightTheme = {
  background: "#FFFFFF",
  textPrimary: "#000000",
  textSecondary: "#555555",
  accent: "#000000",
  border: "#DDDDDD",
  buttonBackground: "#000000",
  buttonText: "#FFFFFF",
};

export const darkTheme = {
  background: "#121212",
  textPrimary: "#FFFFFF",
  textSecondary: "#AAAAAA",
  accent: "#4ADE80",
  border: "#333333",
  buttonBackground: "#FFFFFF",
  buttonText: "#000000",
};

// Backwards-compatible aliases for components that expect different key names
export const lightThemeCompat = {
  ...lightTheme,
  // common legacy keys
  text: lightTheme.textPrimary,
  textDim: lightTheme.textSecondary,
  cardBg: "#FFFFFF",
  cardDark: "#F5F5F5",
  danger: "#FF0000",
};

export const darkThemeCompat = {
  ...darkTheme,
  text: darkTheme.textPrimary,
  textDim: darkTheme.textSecondary,
  cardBg: "#1E1E1E",
  cardDark: "#333333",
  danger: "#FF0000",
};

// Default export for convenience
export default {
  light: lightThemeCompat,
  dark: darkThemeCompat,
};
