'use client'

import Link from "next/link"    // Importing Next.js Image component for optimized images
import Image from "next/image"  // Importing Next.js Link component for client-side navigation
import ThemeToggle  from './ThemeToggle' // Importing a custom theme toggle component

export default function Header() {

  return (
    <header className="w-full px-4 py-2 md:py-3 lg:py-4 border-b bg-background sticky top-0 z-50"> 
      <div className="w-full flex justify-between items-center">
        <Link href="/dashboard" className="flex items-center">
                <Image
                    src="/quill_logo_default.png"
                    alt="Quill Logo"
                    width={84}
                    height={84}
                    className="object-contain"
                />
                <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#5C4DB1] to-[#2B50EC] bg-clip-text text-transparent">
                  Quill
                </span>
        </Link> 
        <ThemeToggle /> 
      </div>
    </header>
  )
}
