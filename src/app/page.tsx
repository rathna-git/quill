'use client'

import NoteCard from '@/components/NoteCard'
import NoteForm from "@/components/NoteForm"
import { useNoteStore } from '@/store/noteStore'


export default function Page(){
  const { notes, addNote } = useNoteStore()


  return(
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Quill 📝</h1>
      <NoteForm onAddNote={addNote} />
      <div className="grid gap-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note}/>
        ))}
      </div>
    </main>
  )
}
