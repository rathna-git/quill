import type { Metadata } from "next";
import { GeistSans } from 'geist/font'
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: "Quill - Your AI Writing Assistant",
  description: "Enhance your writing with AI-powered assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
