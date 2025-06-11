'use client'

import { useNoteStore } from '@/store/noteStore'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import EditNoteForm from '@/components/EditNoteForm'
import DeleteNoteButton from '@/components/DeleteNoteButton'
import { Note } from '@/types'
import DeleteToast from '@/components/DeleteToast'

export default function NoteDetail() {
  const { id } = useParams()
  const router = useRouter()
  const { notes, updateNote } = useNoteStore()
  const [isEditing, setIsEditing] = useState(false)
  const [deletedNote, setDeletedNote] = useState<Note | null>(null)
  const [showToast, setShowToast] = useState(false)

  const note = notes.find((note: Note) => note.id === id)

  useEffect(() => {
    if (!note) {
      router.push('/dashboard')
    }
  }, [note, router])

  if (!note) {
    return null
  }

  const handleDelete = (note: Note) => {
    setDeletedNote(note)
    setShowToast(true)
    router.push('/dashboard')
  }

  const handleUndo = (note: Note) => {
    useNoteStore.getState().addNote(note)
    setShowToast(false)
    setDeletedNote(null)
  }

  const handleDismiss = () => {
    setShowToast(false)
    setDeletedNote(null)
  }

  const handleUpdate = (updatedNote: Note) => {
    updateNote(updatedNote)
    setIsEditing(false)
    toast.success('Note updated successfully!')
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {isEditing ? (
        <EditNoteForm 
          note={note} 
          onCancel={() => setIsEditing(false)} 
          onUpdate={handleUpdate}
        />
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{note.title}</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <DeleteNoteButton noteId={note.id} onDelete={handleDelete} />
            </div>
          </div>
          <p className="whitespace-pre-wrap">{note.content}</p>
        </div>
      )}

      {showToast && deletedNote && (
        <DeleteToast
          note={deletedNote}
          onUndo={handleUndo}
          onDismiss={handleDismiss}
        />
      )}
    </div>
  )
} 