'use client'
import { useState } from 'react'
import {Note} from '@/types'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { v4 as uuidv4 } from 'uuid'

interface NoteFormProps {
    onAddNote: (note: Note) => void
}


export default function NoteForm({ onAddNote }: NoteFormProps){
 const [title, setTitle] = useState('')
 const [content, setContent] = useState('')

 const handleSubmit = (e: React.FormEvent) => {
    //prevents automatic page refresh on form submission by HTML
    e.preventDefault();

    // creates a new note object that follows the Note interface:
    const newNote: Note = {
        id: uuidv4(), //generates a unique ID for the note using the uuid library
        title,
        content,
        createdAt: new Date().toISOString(),
    }

    // sends the new note up to the parent component (page.tsx) by calling the onAddNote function — which adds the note to the notes list.
    onAddNote(newNote) 
    // clears the form inputs after submission by resetting both fields to empty strings.
    setTitle('')
    setContent('')

    console.log({title, content})
   
    //later pass this to the parent component or save to state/localstorage
 }

 return(
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">Title:</label>
            <Input 
                type="text" 
                id="title" 
                name="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Note title'
            />
        </div>
        <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">Content:</label>
            <Textarea 
                id="content" 
                name="content"
                rows={4} 
                value={content}
                onChange={(e) => setContent(e.target.value)} 
                placeholder='Write your note here...'
            />
        </div>
        <Button  type="submit" className="w-full">
            Save Note
        </Button>
    </form>

 )
}

