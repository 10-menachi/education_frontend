import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "'DM Sans', sans-serif",
  headings: { fontFamily: "'Sora', sans-serif" },
  colors: {
    teal: [
      "#e6faf5",
      "#b3f0e0",
      "#80e5cb",
      "#4ddab6",
      "#1acfa1",
      "#00c896",
      "#00a07a",
      "#00785d",
      "#005041",
      "#002820",
    ],
    amber: [
      "#fff8e1",
      "#ffecb3",
      "#ffe082",
      "#ffd54f",
      "#ffca28",
      "#ffc107",
      "#ffb300",
      "#ffa000",
      "#ff8f00",
      "#ff6f00",
    ],
  },
  radius: { md: rem(12), lg: rem(16), xl: rem(24) },
  shadows: {
    sm: "0 1px 4px rgba(0,0,0,0.06)",
    md: "0 4px 16px rgba(0,0,0,0.08)",
    lg: "0 8px 32px rgba(0,0,0,0.10)",
  },
});
