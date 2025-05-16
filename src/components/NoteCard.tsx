import { Card, 
         CardContent, 
         CardHeader, 
         CardTitle, 
         CardDescription } from './ui/card'
import Link from 'next/link'
import { Note } from'@/types'


export default function NoteCard({note}: {note: Note}){


    return (
        <Link href={`/dashboard/${note.id}`} className='block'>
            <Card className='hover:shadow-md trasition-shadow cursor-pointer'>
                <CardHeader>
                    <div>
                        <CardTitle className='text-lg'>{note.title}</CardTitle>
                        <CardDescription className="text-xs text-gray-500">
                        {new Date(note.createdAt).toLocaleString()}
                        </CardDescription>
                    </div>                 
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-800 line-clamp-2">{note.content}</p>
                </CardContent>
            </Card>   
        </Link>
       
    )   
}
