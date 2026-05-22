import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";

import { Sora, DM_Sans } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Education App",
  description: "Modern education platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning>
        <MantineProvider
          theme={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            headings: {
              fontFamily: "var(--font-sora), sans-serif",
            },
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
