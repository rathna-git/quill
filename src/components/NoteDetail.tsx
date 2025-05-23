'use client'

import { Note } from '@/types'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import EditNoteForm from './EditNoteForm'
import DeleteNoteButton from './DeleteNoteButton'

export default function NoteDetail({ note }: { note: Note | undefined }) {
  const [isEditing, setIsEditing] = useState(false)

  if (!note) {
    return (
      <div className="max-w-2xl mx-auto mt-8 text-red-600 text-sm">
        Note not found. <Link href="/" className="underline text-blue-600">Go back</Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link href="/dashboard" className="text-sm text-blue-600 hover:underline block mb-4">
        ← Back to Notes
      </Link>

      {isEditing ? (
        <EditNoteForm note={note} onCancel={() => setIsEditing(false)} />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{note.title}</CardTitle>
            <CardDescription>{new Date(note.createdAt).toLocaleString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{note.content}</p>
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
            <DeleteNoteButton noteId={note.id} />
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
