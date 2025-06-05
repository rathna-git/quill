'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { UndoToastProps } from '@/types'  

/**
 * A toast notification component that appears when a note is deleted.
 * Shows a progress bar and provides an undo option.
 * 
 * @component
 * @param {UndoToastProps} props - The component props
 * @returns {JSX.Element} The rendered toast component
 */

function UndoToast({ t, note, addNote, router }: UndoToastProps) {
  /** Progress state for the countdown animation (100 to 0) */
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const start = Date.now()
    const duration = 5000 // 5 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100)
      setProgress(remaining)
      
      if (elapsed >= duration) {
        clearInterval(interval)
        // Automatically dismiss the toast when progress reaches 0
        toast.dismiss(t.id)
        // Show success toast after the undo toast is dismissed
        toast.success('Note deleted successfully!')
      }
    }, 20) // Increased update frequency for smoother animation

    return () => clearInterval(interval)
  }, [t.id]) // Added t.id as dependency

  return (
    <div className="flex flex-col gap-2 p-4 dark:bg-zinc-900 rounded shadow-md relative w-[320px]">
      <div className="flex-1">
        <p className="text-sm font-medium">Deleting the note...</p>
        <p className="text-xs text-muted-foreground">Undo within 5 seconds</p>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-20 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-1"
        onClick={() => {
          addNote(note)
          toast.dismiss(t.id)
          router.push(`/dashboard/${note.id}`)
          toast.success('Note restored successfully!')
        }}
      >
        Undo
      </button>  
    </div>
  )
}

export default UndoToast;
