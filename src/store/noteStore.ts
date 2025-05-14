import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Note } from '@/types'

interface NoteStore {
    notes: Note[]
    addNote: (note: Note) => void //addStore func takes note of type Note and return nothing(void)
    deleteNote: (id: string) => void //deleteNote func takes id which is of type string and returns nothing(void)
}

export const useNoteStore = create<NoteStore>()(
    persist(
        (set) => ({
            notes: [],
            addNote: (note) => 
                set((state) => ({
                    notes: [note,...state.notes],
                })),
            deleteNote: (id) =>
                set((state) => ({
                    notes: state.notes.filter((n) => n.id !== id),
                })),
        }),
        {
            name: 'quill-notes', //key in localStorage
        }
    )
)