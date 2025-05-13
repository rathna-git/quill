'use client'

import { useState, useEffect } from "react"
import { Note } from '@/types'
import NoteCard from '@/components/NoteCard'
import NoteForm from "@/components/NoteForm"


export default function Page(){
  const [notes, setNotes] = useState<Note[]>([])

 // Set sample notes after hydration
  useEffect(() => {
    const sampleNotes: Note[]= [
    {
      id: '1',
      title: 'Welcome to Quill',
      content: 'This is your first note. Feel free to edit or delete it',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Second Note',
      content: 'Quill is built with React, Next.js and TypeScript!',
      createdAt: new Date().toISOString(),
    },
  ]
  setNotes(sampleNotes)
}, [])

const handleAddNote = (newNote: Note) => {
  setNotes((prevNotes) => [newNote, ...prevNotes])
}

  return(
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Notes</h1>
      <NoteForm onAddNote={handleAddNote} />
      <ul className="space-y-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note}/>
        ))}
      </ul>
    </main>
  )
}
