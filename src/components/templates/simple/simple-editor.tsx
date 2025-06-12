'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Button } from '@/components/ui/button'
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered,
  Heading1,
  Heading2,
  Quote
} from 'lucide-react'
import styles from '@/styles/editor.module.css'
import React, { forwardRef, useEffect, useCallback, useRef } from 'react'
import { debounce } from 'lodash'

interface SimpleEditorProps {
  content?: string
  editable?: boolean
  onChange?: (content: string) => void
}

export const SimpleEditor = forwardRef<{ getContent: () => string }, SimpleEditorProps>(({ content = '', editable = true, onChange }, ref) => {
  const isDirty = useRef(false)
  const initialContent = useRef(content)

  // Create a debounced version of onChange
  const debouncedOnChange = useCallback(
    debounce((newContent: string) => {
      if (isDirty.current) {
        onChange?.(newContent)
        isDirty.current = false
      }
    }, 1000),
    [onChange]
  )

  const editor = useEditor({
    extensions: [StarterKit],
    content: content || '<p></p>',
    editable,
    onCreate: ({ editor }) => {
      initialContent.current = editor.getHTML()
    },
    onUpdate: ({ editor }) => {
      const currentContent = editor.getHTML()
      if (currentContent !== initialContent.current) {
        isDirty.current = true
        debouncedOnChange(currentContent)
      }
    }
  })

  // Update editor content when prop changes
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
      initialContent.current = content
      isDirty.current = false
    }
  }, [content, editor])

  // Cleanup debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedOnChange.cancel()
    }
  }, [debouncedOnChange])

  // Expose a method to get the current content
  React.useImperativeHandle(ref, () => ({
    getContent: () => editor?.getHTML() || ''
  }))

  if (!editor) {
    return null
  }

  return (
    <div className="border rounded-lg bg-background">
      {editable && (
        <div className="border-b p-2 flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'bg-muted' : ''}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'bg-muted' : ''}
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'bg-muted' : ''}
          >
            <Heading1 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'bg-muted' : ''}
          >
            <Heading2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'bg-muted' : ''}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'bg-muted' : ''}
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'bg-muted' : ''}
          >
            <Quote className="h-4 w-4" />
          </Button>
        </div>
      )}
      <div className="p-4">
        <EditorContent editor={editor} className={styles.editor} />
      </div>
    </div>
  )
})

SimpleEditor.displayName = 'SimpleEditor' 