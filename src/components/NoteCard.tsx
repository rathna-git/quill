'use client'

import { Card, 
         CardContent, 
         CardHeader, 
         CardTitle, 
         CardDescription } from './ui/card'
import Link from 'next/link'
import { Note } from'@/types'
import { useEffect, useState } from 'react'
import { NoteContent } from './NoteContent'

export default function NoteCard({note}: {note: Note}) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Link href={`/dashboard/${note.id}`} className='block'>
            <Card className='hover:shadow-md transition-shadow cursor-pointer'>
                <CardHeader>
                    <div>
                        <CardTitle className='text-lg'>{note.title}</CardTitle>
                        <CardDescription className="text-xs text-muted-foreground">
                            {new Date(note.createdAt).toLocaleString()}
                        </CardDescription>
                    </div>                 
                </CardHeader>
                <CardContent>
                    <div className="text-sm line-clamp-2">
                        <NoteContent content={note.content} />
                    </div>
                </CardContent>
            </Card>   
        </Link>
    )   
}
