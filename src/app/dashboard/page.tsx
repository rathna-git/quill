'use client'

import NoteCard from '@/components/NoteCard'
import NoteForm from "@/components/NoteForm"
import { useNoteStore } from '@/store/noteStore'
import { useEffect, useState } from 'react'

export default function Page() {
  const { notes } = useNoteStore()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading skeleton
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <NoteForm />
      <div className="grid gap-4">
        {notes.length === 0 ? (
          <p className='text-sm text-muted-foreground italic'>No notes yet. Start by adding one!</p>
        ) : (
          <div className='grid gap-4'> 
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
