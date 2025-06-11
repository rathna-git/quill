import { useNoteStore } from "@/store/noteStore";
import toast from 'react-hot-toast';
import { Note } from '@/types';

export function useAddNoteWithToast(){
    const addNote = useNoteStore((state) => state.addNote)

    function handleAdd(note: Note){
        addNote(note)
        toast.success('Note added successfully!')
    }

    return {
        handleAdd,
    }
}