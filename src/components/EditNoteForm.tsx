'use client'

import { Note } from '@/types'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { SimpleEditor } from '@/components/templates/simple/simple-editor'
import { useState, useRef } from 'react'

interface EditNoteFormProps {
  note: Note
  onCancel: () => void
  onUpdate: (note: Note) => void
}

export default function EditNoteForm({ note, onCancel, onUpdate }: EditNoteFormProps) {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)
  const editorRef = useRef<{ getContent: () => string }>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate({
      ...note,
      title,
      content: editorRef.current?.getContent() || content
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="text-lg font-semibold"
        />
      </div>
      <div>
        <SimpleEditor 
          ref={editorRef}
          content={content}
          editable={true}
          onChange={setContent}
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Save Changes
        </Button>
      </div>
    </form>
  )
}
