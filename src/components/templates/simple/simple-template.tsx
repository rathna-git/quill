'use client'

import { SimpleEditor } from './simple-editor'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'
import { useState, useRef } from 'react'
import { useUpdateNote } from '@/hooks/useUpdateNote'
import { useToast } from '@/hooks/use-toast'

interface SimpleTemplateProps {
  note: {
    id: string
    content: string
  }
}

export const SimpleTemplate = ({ note }: SimpleTemplateProps) => {
  const [isSaving, setIsSaving] = useState(false)
  const editorRef = useRef<{ getContent: () => string }>(null)
  const { updateNote } = useUpdateNote()
  const { toast } = useToast()

  const handleSave = async () => {
    if (!editorRef.current) return

    setIsSaving(true)
    try {
      const content = editorRef.current.getContent()
      await updateNote(note.id, content)
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
        ref={editorRef}
        content={note.content}
        editable={true}
      />
    </div>
  )
} 