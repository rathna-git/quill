'use client'

import NoteCard from '@/components/NoteCard'
import NoteForm from "@/components/NoteForm"
import { useNoteStore } from '@/store/noteStore'


export default function Page(){
  const { notes } = useNoteStore() // reads notes from the Zustand useNoteStore


  return(
    <main className="p-6 max-w-3xl mx-auto">
      <NoteForm />
      <div className="grid gap-4">
        {notes.length === 0 ? (
          <p className='text-sm text-gray-500 italic'>No notes yet. Start by adding one!</p>
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
