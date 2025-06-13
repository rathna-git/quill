import { useState } from 'react'

type ToastType = 'default' | 'destructive'

interface Toast {
  id?: number
  title: string
  description: string
  variant?: ToastType
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = ({ title, description, variant = 'default' }: Toast) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, title, description, variant }])

    // Remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  return { toast, toasts }
} 