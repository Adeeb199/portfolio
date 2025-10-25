// store/theme.ts
export const theme = {
  background: {
    light: "bg-gradient-to-br from-white via-slate-50 to-indigo-100",
    dark: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950",
  },
  glowingShapes: {
    topLeft: {
      light: "bg-indigo-300/30",
      dark: "bg-indigo-800/30",
    },
    bottomRight: {
      light: "bg-pink-300/30",
      dark: "bg-pink-800/30",
    },
  },
  cardGradient: {
    light: "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400",
    dark: "bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700",
  },
  cardBackground: {
    light: "bg-white/85",
    dark: "bg-slate-950/85",
  },
  bottomFade: {
    light: "bg-gradient-to-t from-white to-transparent",
    dark: "bg-gradient-to-t from-slate-950 to-transparent",
  },
};
