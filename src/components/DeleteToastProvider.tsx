'use client'

import { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react'
import { Note } from '@/types'
import { DeleteToast, Toast } from './ui/toast'
import { useNoteStore } from '@/store/noteStore'
import { useRouter } from 'next/navigation'

interface DeleteToastContextType {
  showDeleteToast: (note: Note) => void
}

const DeleteToastContext = createContext<DeleteToastContextType | undefined>(undefined)

export function DeleteToastProvider({ children }: { children: ReactNode }) {
  const [showToast, setShowToast] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [progress, setProgress] = useState(100)
  const isUndoingRef = useRef(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const noteToDeleteRef = useRef<Note | null>(null)
  const router = useRouter()
  const deleteNote = useNoteStore((state) => state.deleteNote)

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const showDeleteToast = (note: Note) => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    noteToDeleteRef.current = note
    setShowToast(true)
    setProgress(100)
    isUndoingRef.current = false

    // Start progress bar
    const start = Date.now()
    const duration = 5000 // 5 seconds

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100)
      setProgress(remaining)
      
      if (elapsed >= duration) {
        if (timerRef.current) {
          clearInterval(timerRef.current)
        }
        // Only delete and navigate when timer runs out
        if (noteToDeleteRef.current && !isUndoingRef.current) {
          setShowToast(false)
          setSuccessMessage('Note deleted successfully')
          setShowSuccess(true)
          setTimeout(() => {
            deleteNote(noteToDeleteRef.current!.id)
            setShowSuccess(false)
            noteToDeleteRef.current = null
            router.push('/dashboard')
          }, 1000)
        }
      }
    }, 20)
  }

  const handleUndo = () => {
    // Clear the timer when undoing
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    isUndoingRef.current = true
    setShowToast(false)
    noteToDeleteRef.current = null
    setSuccessMessage('Note restored successfully')
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      isUndoingRef.current = false
    }, 2000)
  }

  const handleDismiss = () => {
    // Clear the timer when dismissing
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    if (!isUndoingRef.current && noteToDeleteRef.current) {
      setShowToast(false)
      setSuccessMessage('Note deleted successfully')
      setShowSuccess(true)
      setTimeout(() => {
        deleteNote(noteToDeleteRef.current!.id)
        setShowSuccess(false)
        noteToDeleteRef.current = null
        router.push('/dashboard')
      }, 1000)
    }
  }

  return (
    <DeleteToastContext.Provider value={{ showDeleteToast }}>
      {children}
      {showToast && noteToDeleteRef.current && (
        <DeleteToast
          message="Note Deleting..."
          subMessage="Undo within 5 seconds"
          progress={progress}
          isVisible={showToast}
          onUndo={handleUndo}
          onDismiss={handleDismiss}
        />
      )}
      <Toast
        message={successMessage}
        isVisible={showSuccess}
      />
    </DeleteToastContext.Provider>
  )
}

export function useDeleteToast() {
  const context = useContext(DeleteToastContext)
  if (context === undefined) {
    throw new Error('useDeleteToast must be used within a DeleteToastProvider')
  }
  return context
} 