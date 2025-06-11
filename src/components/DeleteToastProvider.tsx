'use client'

import { createContext, useContext, useState, ReactNode, useRef } from 'react'
import { Note } from '@/types'
import DeleteToast from './DeleteToast'
import { useNoteStore } from '@/store/noteStore'
import { motion } from 'framer-motion'

interface DeleteToastContextType {
  showDeleteToast: (note: Note) => void
}

const DeleteToastContext = createContext<DeleteToastContextType | undefined>(undefined)

function SuccessToast({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999]"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-[320px]">
        <p className="text-sm font-medium">{message}</p>
      </div>
    </motion.div>
  )
}

export function DeleteToastProvider({ children }: { children: ReactNode }) {
  const [deletedNote, setDeletedNote] = useState<Note | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const isUndoingRef = useRef(false)
  const addNote = useNoteStore((state) => state.addNote)

  const showDeleteToast = (note: Note) => {
    setDeletedNote(note)
    setShowToast(true)
    isUndoingRef.current = false
  }

  const handleUndo = (note: Note) => {
    isUndoingRef.current = true
    setShowToast(false)
    addNote(note)
    setDeletedNote(null)
    setSuccessMessage('Note restored successfully')
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      isUndoingRef.current = false
    }, 2000)
  }

  const handleDismiss = () => {
    if (!isUndoingRef.current) {
      setSuccessMessage('Note deleted successfully')
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 2000)
    }
    setShowToast(false)
    setDeletedNote(null)
  }

  return (
    <DeleteToastContext.Provider value={{ showDeleteToast }}>
      {children}
      {showToast && deletedNote && (
        <DeleteToast
          note={deletedNote}
          onUndo={handleUndo}
          onDismiss={handleDismiss}
        />
      )}
      {showSuccess && (
        <SuccessToast message={successMessage} />
      )}
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