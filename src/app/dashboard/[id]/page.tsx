'use client'

import { useParams } from 'next/navigation'
import { useNoteStore } from '@/store/noteStore'
import NoteDetail from '@/components/NoteDetail'

export default function NotePage() {
  const params = useParams() // to get the note id
  const id = params.id as string
  const { notes } = useNoteStore() //fetches the notes from the store
  const note = notes.find((n) => n.id === id)

  return <NoteDetail note={note} />
}
