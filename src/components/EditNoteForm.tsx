'use client'

import { useEffect, useRef, useState } from 'react'
import { useNoteStore } from '@/store/noteStore'
import { Note } from '@/types'
import { Button } from '@/components/ui/button'

export default function EditNoteForm({
  note,
  onCancel,
}: {
  note: Note
  onCancel: () => void
}) {
  const { updateNote } = useNoteStore()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const inputareaRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setContent(note.content)
      setTimeout(() => {
        inputareaRef.current?.focus()
      }, 0) // Autofocuses the input area(title). The ?. makes sure it doesn’t crash if it's still null. 
      // delay focus by a tick to ensure DOM stability before focusing
    }
  }, [note])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateNote({ ...note, title, content })
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        ref={inputareaRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border rounded p-2"
        rows={6}
      />
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
