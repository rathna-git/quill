import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Note } from '@/types'

interface NoteStore {
    notes: Note[]
    pendingDeleteId: string | null
    addNote: (note: Note) => void //addStore func takes note of type Note and return nothing(void)
    deleteNote: (id: string) => void //deleteNote func takes id which is of type string and returns nothing(void)
    updateNote: (id: string, note: Partial<Note>) => void //finds the node with matching id and replaces with the updated one
    setPendingDelete: (id: string | null) => void
}

export const useNoteStore = create<NoteStore>()(
    persist(
        (set) => ({
            notes: [],
            pendingDeleteId: null,
            addNote: (note) => 
                set((state) => ({
                    notes: [note,...state.notes],
                })),
            deleteNote: (id) =>
                set((state) => ({
                    notes: state.notes.filter((n) => n.id !== id),
                    pendingDeleteId: null,
                })),
            updateNote: (id, note) =>
                set((state) => ({
                    notes: state.notes.map((n) => 
                        n.id === id ? { ...n, ...note } : n
                    ),
                })),
            setPendingDelete: (id) => set({ pendingDeleteId: id }),
        }),
        {
            name: 'quill-notes',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ notes: state.notes })
        }
    )
)