import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';
import { DeleteToastProvider } from '@/components/DeleteToastProvider';

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <ClerkProvider dynamic>
            <DeleteToastProvider>
              <Header />
              <main className="flex-1 overflow-y-auto">{children}</main>
              <Toaster position="top-center" />
            </DeleteToastProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
