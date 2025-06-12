'use client'

import { useDeleteNoteWithConfirm } from '@/hooks/useDeleteNoteWithConfirm'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { Note } from '@/types'

interface DeleteNoteButtonProps {
  noteId: string
  onDelete: (note: Note) => void
}

export default function DeleteNoteButton({ noteId, onDelete }: DeleteNoteButtonProps) {
  const { handleDelete } = useDeleteNoteWithConfirm()

  const handleDeleteAndNavigate = () => {
    const note = handleDelete(noteId)
    if (note) {
      onDelete(note)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="text-red-500 hover:bg-red-100"
        >
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This note will be permanently deleted. You can&apos;t undo this action.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAndNavigate}>
            Yes, delete it
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
