'use client'

import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from '@/components/mode-toggle'
import AuthButtons from '@/components/AuthButtons'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-200 ${isScrolled ? 'shadow-sm' : ''}`}>
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
