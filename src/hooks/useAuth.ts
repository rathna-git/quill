import { useState, useEffect } from 'react'

interface User {
  id: string
  email: string
  name: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // TODO: Implement actual auth check
        // For now, we'll just set loading to false
        setLoading(false)
      } catch (error) {
        console.error('Auth check failed:', error)
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const signIn = async (email: string) => {
    try {
      // TODO: Implement actual sign in
      // For now, we'll just set a mock user
      setUser({
        id: '1',
        email,
        name: 'Test User'
      })
      return true
    } catch (error) {
      console.error('Sign in failed:', error)
      return false
    }
  }

  const signOut = async () => {
    try {
      // TODO: Implement actual sign out
      setUser(null)
      return true
    } catch (error) {
      console.error('Sign out failed:', error)
      return false
    }
  }

  return {
    user,
    loading,
    signIn,
    signOut
  }
} 