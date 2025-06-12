'use client'

import { useNoteStore } from '@/store/noteStore'
import { useEffect, useState } from 'react'
import NoteCard from '@/components/NoteCard'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Note } from '@/types'

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)
  const notes = useNoteStore((state) => state.notes)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Notes</h1>
        <Link href="/dashboard/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Note
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note: Note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}
