import { Note } from'@/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function NoteCard({note}: {note: Note}){
    return (
        <Card>
            <CardHeader>
                <CardTitle>{note.title}</CardTitle>
                <CardDescription className="text-xs text-gray-500">
                {new Date(note.createdAt).toLocaleString()}
                </CardDescription>
            </CardHeader>
            <CardContent>
            <p className="text-sm text-gray-600">{note.content}</p>
            </CardContent>
        </Card>   
    )   
}
