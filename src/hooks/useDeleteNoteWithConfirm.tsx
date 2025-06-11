import { useNoteStore } from "@/store/noteStore";
import { Note } from "@/types"; 
import { useState } from "react";

/**
 * A hook that provides functionality to delete a note with a confirmation toast
 * that includes an undo option and progress bar.
 * 
 * @returns {Object} An object containing the handleDelete function
 * @returns {Function} handleDelete - Function to delete a note and show the confirmation toast
 */
export function useDeleteNoteWithConfirm() {
    const deleteNote = useNoteStore((state) => state.deleteNote)
    const addNote = useNoteStore((state) => state.addNote)
    const notes = useNoteStore((state) => state.notes)
    const [deletedNote, setDeletedNote] = useState<Note | null>(null)

    /**
     * Deletes a note and shows a confirmation toast with undo option
     * @param {string} id - The ID of the note to delete
     */
    function handleDelete(id: string): Note | null {
        const note = notes.find((note: Note) => note.id === id)
        if (!note) return null

        deleteNote(id)
        setDeletedNote(note)
        return note
    }

    function handleDismiss() {
        setDeletedNote(null)
    }

    function handleUndo(note: Note) {
        addNote(note)
        setDeletedNote(null)
    }

    return {
        handleDelete,
        deletedNote,
        handleDismiss,
        handleUndo,
    }
}