import { useRouter } from 'next/navigation'

/**
 * Represents a note in the application
 * @interface Note
 */
export interface Note {
    /** Unique identifier for the note */
    id: string;
    /** Title of the note */
    title: string;
    /** Content/body of the note in HTML format */
    content: string;
    /** ISO string representing when the note was created */
    createdAt: string;
}

/**
 * Props for the UndoToast component
 * @interface UndoToastProps
 */
export interface UndoToastProps {
    /** Toast instance with ID for dismissal */
    t: { id: string };
    /** The note that was deleted and can be restored */
    note: Note;
    /** Function to restore the deleted note */
    addNote: (note: Note) => void;
    /** Next.js router instance for navigation */
    router: ReturnType<typeof useRouter>;
}