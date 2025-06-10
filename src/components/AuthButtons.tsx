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
          <button 
            type="button"
            className="cursor-pointer text-sm font-medium text-[#3a2f7c] hover:text-[#5876ef] transition-colors relative z-50"
          >
            Log In
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  )
} 