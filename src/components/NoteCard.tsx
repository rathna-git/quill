import { Note } from'@/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from './ui/button'
import { useNoteStore } from '@/store/noteStore'
import { Trash2 } from 'lucide-react'


export default function NoteCard({note}: {note: Note}){
    const deleteNote = useNoteStore((state) => state.deleteNote)

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
                <p className="text-sm text-gray-600">{note.content}</p>
            </CardContent>

            <CardFooter className='grid grid-flow-col justify-items-end' >
                <Button
                    variant = 'outline'
                    size='icon'
                    onClick={() => deleteNote(note.id)}
                    className="text-red-500 hover:bg-red-100"
                >
                    <Trash2/>
                </Button> 
            </CardFooter>
        </Card>   
    )   
}
