import { Note } from '@/types'

const STORAGE_KEY = 'quill-notes'

// utility func to save notes array to localStorage
export function saveNotes(notes: Note[]){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}

// utility func to load notes array from localStorage
export function loadNotes(): Note[] {

    // avoids errors during server-side rendering, where localStorage is not available (because there’s no window object on the server).
    if(typeof window === 'undefined') return []

    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []

    //  in case the data is corrupted, so the app doesn’t crash — it falls back to an empty array.
    try {
        return JSON.parse(data) as Note[] //parses the localStorage data into JS array
    } catch {
        return []
    }
}