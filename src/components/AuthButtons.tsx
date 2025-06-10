'use client'

import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'

export default function AuthButtons() {
  return (
    <div className="relative z-50">
      <SignedIn>
        <div className="relative z-50">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className="text-sm font-medium text-[#5e41ff] hover:text-[#5876ef] transition-colors">
            Log In
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  )
} 