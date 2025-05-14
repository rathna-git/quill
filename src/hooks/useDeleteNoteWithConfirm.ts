import { useNoteStore } from "@/store/noteStore";
import { toast } from "sonner";

export function useDeleteNoteWithConfirm() {
    const deleteNote = useNoteStore((state) => state.deleteNote)

    function handleDelete(id: string){
        deleteNote(id)
        toast.success('Note deleted successfully')
    }

    return {
        handleDelete,
    }
}