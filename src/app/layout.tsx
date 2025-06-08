import type { Metadata } from "next";
import { GeistSans } from 'geist/font'
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/Header';
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Quill - Your AI Writing Assistant",
  description: "Enhance your writing with AI-powered assistance",
  icons: {
    icon: [
      {
        url: '/quill_favicon.ico',
        href: '/quill_favicon.ico',
      }
    ],
  },
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
