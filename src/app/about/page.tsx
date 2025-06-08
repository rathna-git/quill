'use client'

import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 max-w-screen-2xl items-center py-4 px-8">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Go to homepage"
            >
              <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#3a2f7c] to-[#5876ef] bg-clip-text text-transparent">
                Quill
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* Add search or other header content here */}
            </div>
            <nav className="flex items-center space-x-2">
              <ModeToggle />
              <UserButton />
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Quill</h1>
          <div className="grid gap-6">
            <div className="p-6 rounded-lg border border-border/40 bg-card">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                Quill is designed to be your intelligent note companion, helping you capture, organize, and refine ideas effortlessly. 
                We believe that the best ideas deserve the best tools to bring them to life.
              </p>
              <p className="text-muted-foreground mb-4">
                With built-in AI features like smart summaries, tone adjustment, and contextual suggestions, 
                Quill turns simple notes into powerful insights. Our goal is to help you stay focused and write smarter.
              </p>
              <p className="text-muted-foreground">
                Join us on this journey to revolutionize the way you capture and develop your thoughts.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 