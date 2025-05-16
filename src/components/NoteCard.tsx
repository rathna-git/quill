
import { AlertDialog, 
         AlertDialogAction, 
         AlertDialogCancel, 
         AlertDialogContent, 
         AlertDialogDescription, 
         AlertDialogFooter, 
         AlertDialogHeader, 
         AlertDialogTitle, 
         AlertDialogTrigger } from './ui/alert-dialog'
import { Card, 
         CardContent, 
         CardHeader, 
         CardTitle, 
         CardDescription, 
         CardFooter } from './ui/card'
import { Button } from './ui/button'
import { useDeleteNoteWithConfirm } from '@/hooks/useDeleteNoteWithConfirm'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import { Note } from'@/types'


export default function NoteCard({note}: {note: Note}){
    const { handleDelete } = useDeleteNoteWithConfirm()

    return (
        <Card>
            <CardHeader>
                <div>
                    <CardTitle>{note.title}</CardTitle>
                    <CardDescription className="text-xs text-gray-500">
                    {new Date(note.createdAt).toLocaleString()}
                    </CardDescription>
                </div>                 
            </CardHeader>

            <CardContent>
                <p className="text-sm text-gray-800">{note.content}</p>
            </CardContent>

            <CardFooter className='grid grid-flow-col justify-items-end'>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            variant = 'outline'
                            size='icon'
                            className="text-red-500 hover:bg-red-100"
                        >
                            <Trash2/>
                        </Button> 
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action will permanently delete this note. You can&apos;t undo this.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                                onClick={() => handleDelete(note.id)}>
                                Yes, delete it
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardFooter>
        </Card>   
    )   
}
