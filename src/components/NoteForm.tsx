'use client'
import { useState } from 'react'
import {Note} from '@/types'
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
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
        <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
        <div>
            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content:</label>
            <textarea 
                id="content" 
                name="content"
                rows={4} 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write a note here...">
            </textarea>
        </div>
        <button  type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            Save Note
        </button>
    </form>

 )
}

