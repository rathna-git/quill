'use client'

import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from '@/components/mode-toggle'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'

function AuthButtons() {
  return (
    <div className="relative z-50">
      <SignedIn>
        <div className="relative z-50">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button 
            type="button"
            className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 px-4 py-2 relative z-50"
          >
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5876ef]/15 via-[#3a2f7c]/10 to-[#5876ef]/15" />
      
      <div className="container flex h-20 max-w-screen-2xl items-center py-4 px-8">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Go to homepage"
          >
            <div className="relative">
              <Image
                src="/quill_logo_default.png"
                alt="Quill Logo"
                width={54}
                height={54}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#3a2f7c] to-[#5876ef] bg-clip-text text-transparent">
              Quill
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search or other header content here */}
          </div>
          <nav className="flex items-center space-x-2 relative z-50">
            <ModeToggle />
            <AuthButtons />
          </nav>
        </div>
      </div>
    </header>
  )
}
