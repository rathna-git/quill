'use client'

import Link from "next/link"
import Image from "next/image"
//import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'

export default function Header() {


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton/>
            </SignedOut>           
          </nav>
        </div>
      </div>
    </header>
  )
}
