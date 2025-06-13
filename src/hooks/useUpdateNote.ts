import { useState } from 'react'
import { Note } from '@/types'

export const useUpdateNote = () => {
  const [isLoading, setIsLoading] = useState(false)

  const updateNote = async (noteId: string, content: string) => {
    setIsLoading(true)
    try {
      // Get existing notes from localStorage
      const notes = JSON.parse(localStorage.getItem('notes') || '[]') as Note[]
      
      // Find and update the note
      const updatedNotes = notes.map((note: Note) => 
        note.id === noteId ? { ...note, content } : note
      )
      
      // Save back to localStorage
      localStorage.setItem('notes', JSON.stringify(updatedNotes))
      
      // Return the updated note
      return updatedNotes.find((note: Note) => note.id === noteId)
    } catch (error) {
      console.error('Error updating note:', error)
      throw new Error('Failed to update note')
    } finally {
      setIsLoading(false)
    }
  }

  return { updateNote, isLoading }
} 