'use client'

import Link from "next/link"
import { useParams } from "next/navigation"
import { useNoteStore } from "@/store/noteStore"
import { Card,
         CardContent,
         CardDescription,
         CardHeader,
         CardTitle } from '@/components/ui/card'



export default function NotePage() {
    
    const params = useParams()
    const id = params.id as string

    const { notes } = useNoteStore()
    const note = notes.find((n) => n.id === id)

    if (!note){
        return(
            <div className="max-w-2xl mx-auto mt-8 text-red-600 text-sm">
                Mote not found. <Link href='/' className="underline text-blue-600">Go back</Link>
            </div>
        )
    }

    return (
    <div className="max-w-2xl mx-auto p-6">
        <Link href='/' className="text-sm text-blue-600 hover:underline block mb-4">
        ← Back to Notes
        </Link>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">{note.title}</CardTitle>
                <CardDescription className="text-xs text-gray-500">
                    Created: {new Date(note.createdAt).toLocaleString()}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-base text-gray-800 whitespace-pre-wrap">{note.content}</p>
            </CardContent>
        </Card>
    </div>
    
    )
}