'use client'

import Link from "next/link"
import Image from "next/image"
import ThemeToggle  from './ThemeToggle'

export default function Header() {
  return (
    <header className="w-full px-4 py-2 md:py-3 lg:py-4 border-b bg-background sticky top-0 z-50">
      <div className="w-full flex justify-between items-center">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/quill_logo.png"
            alt="Quill Logo"
            width={80}
            height={80}
            className="rounded"
          />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
