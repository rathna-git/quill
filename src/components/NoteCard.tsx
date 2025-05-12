import { Note } from'@/types'

export default function NoteCard({note}: {note: Note}){
    return (
        <li key={note.id} className="border p-4 rounded-md shadow">
          <h2 className="font-semibold">{note.title}</h2>
          <p className="text-sm text-gray-600">{note.content}</p>
          <p className="text-xs text-gray-400 mt-2">
            Created: {new Date(note.createdAt).toLocaleString()}
          </p>
        </li>    
    )   
}
