import { useNoteStore } from "@/store/noteStore";
import { Note } from "@/types"; 

/**
 * A hook that provides functionality to delete a note with a confirmation toast
 * that includes an undo option and progress bar.
 * 
 * @returns {Object} An object containing the handleDelete function
 * @returns {Function} handleDelete - Function to get a note for deletion
 */
export function useDeleteNoteWithConfirm() {
    const notes = useNoteStore((state) => state.notes)

    /**
     * Gets a note for deletion
     * @param {string} id - The ID of the note to delete
     */
    function handleDelete(id: string): Note | null {
        const note = notes.find((note: Note) => note.id === id)
        if (!note) return null
        return note
    }

    return {
        handleDelete,
    }
}