'use client'

import { Note } from '@/types'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import EditNoteForm from './EditNoteForm'
import DeleteNoteButton from './DeleteNoteButton'
import { useNoteStore } from '@/store/noteStore'
import toast from 'react-hot-toast'
import { NoteContent } from './NoteContent'

export default function NoteDetail({ note }: { note: Note | undefined }) {
  const [isEditing, setIsEditing] = useState(false)
  const [localNote, setLocalNote] = useState<Note | undefined>(note)
  const updateNote = useNoteStore((state) => state.updateNote)

  const handleUpdate = (updatedNote: Note) => {
    setLocalNote(updatedNote)
    updateNote(updatedNote.id, {
      title: updatedNote.title,
      content: updatedNote.content
    })
    setIsEditing(false)
    toast.success('Note updated successfully!')
  }

  if (!localNote) {
    return null
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link href="/dashboard" className="text-sm text-blue-600 hover:underline block mb-4">
        ← Back to Notes
      </Link>

      {isEditing ? (
        <EditNoteForm 
          note={localNote} 
          onCancel={() => setIsEditing(false)} 
          onUpdate={handleUpdate}
        />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{localNote.title}</CardTitle>
            <CardDescription>{new Date(localNote.createdAt).toLocaleString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <NoteContent content={localNote.content} />
          </CardContent>
          <CardFooter className="grid grid-flow-col justify-end gap-2">
            <Button
              variant="outline"
              size="icon"
              className="text-blue-500 hover:bg-blue-100"
              onClick={() => setIsEditing(true)}
            >
              <Pencil />
            </Button>
            <DeleteNoteButton noteId={localNote.id} />
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
