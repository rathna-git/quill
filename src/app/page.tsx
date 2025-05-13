'use client'

import { useState, useEffect } from "react"
import { Note } from '@/types'
import NoteCard from '@/components/NoteCard'
import NoteForm from "@/components/NoteForm"
import { saveNotes, loadNotes } from "@/lib/notes"


export default function Page(){
  const [notes, setNotes] = useState<Note[]>([])

 // Load notes from localStorage on first render
  useEffect(() => {
    const storedNotes = loadNotes()
      setNotes(storedNotes)
  },[])

  // Save notes to localStorage whenever they change
  useEffect(() => {
    saveNotes(notes)
  }, [notes])
  

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
