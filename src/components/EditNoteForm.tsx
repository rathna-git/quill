'use client'

import { Note } from '@/types'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'
import { useState } from 'react'
import { useUpdateNote } from '@/hooks/useUpdateNote'
import { useToast } from '@/hooks/use-toast'
import { Save } from 'lucide-react'

interface EditNoteFormProps {
  note: Note
  onCancel: () => void
  onUpdate: (note: Note) => void
}

export default function EditNoteForm({ note, onCancel, onUpdate }: EditNoteFormProps) {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)
  const [isSaving, setIsSaving] = useState(false)
  const { updateNote } = useUpdateNote()
  const { toast } = useToast()

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle)
  }

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await updateNote(note.id, content)
      onUpdate({
        ...note,
        title,
        content
      })
      toast({
        title: 'Note saved',
        description: 'Your changes have been saved successfully.'
      })
    } catch (err: unknown) {
      console.error('Error saving note:', err)
      toast({
        title: 'Error saving note',
        description: 'There was a problem saving your changes.',
        variant: 'destructive'
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Note title"
          className="text-lg font-semibold"
        />
      </div>
      <div className="space-y-4">
        <div className="flex justify-end">
          <Button 
            onClick={handleSave}
            disabled={isSaving}
          >
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? 'Saving...' : 'Save'}
          </Button>
        </div>
        <SimpleEditor 
          content={content}
          editable={true}
          onContentChange={handleContentChange}
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
