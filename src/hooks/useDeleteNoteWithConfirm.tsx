import { useRouter } from "next/navigation";
import { useNoteStore } from "@/store/noteStore";
import { toast } from "sonner";
import { Note, UndoToastProps } from "@/types"; 
import UndoToast from "@/components/UndoToast";

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
    const router = useRouter()  

    /**
     * Deletes a note and shows a confirmation toast with undo option
     * @param {string} id - The ID of the note to delete
     */
    function handleDelete(id: string) {
        const deletedNote = notes.find((note: Note) => note.id === id)
        if (!deletedNote) return

        deleteNote(id)
        // Create a custom toast with the UndoToast component
        // The toast will show for 2 seconds and allow undoing the deletion
        toast.custom((t) => {
            // Prepare props for the UndoToast component
            const props: UndoToastProps = {
                t: { id: t.toString() }, // Pass the toast ID for dismissal
                note: deletedNote,       // Pass the deleted note for potential restoration
                addNote,                 // Pass the function to restore the note
                router                   // Pass the router for navigation after undo
            }
            return <UndoToast {...props} />
        }, {
            duration: 5000  // 5 seconds
        });
    }

    return {
        handleDelete,
    }
}