'use client'

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useNoteStore } from "@/store/noteStore"
import { useState } from "react"
import { Card,
         CardContent,
         CardDescription,
         CardHeader,
         CardTitle,
         CardFooter 
} from '@/components/ui/card'
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

import { Trash2, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDeleteNoteWithConfirm } from '@/hooks/useDeleteNoteWithConfirm'


export default function NotePage() {
    
    const params = useParams()
    const id = params.id as string
    const router = useRouter()

    const { notes, updateNote } = useNoteStore()
    const note = notes.find((n) => n.id === id)
    const { handleDelete } = useDeleteNoteWithConfirm();

    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(note?.title || '')
    const [content, setContent] = useState(note?.content || '')

    const handleEdit = () => {
        if (!note) return
        setTitle(note.title)
        setContent(note.content)
        setIsEditing(true)
    }

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

        {isEditing ? (
            <form
                onSubmit = {(e) => {
                    e.preventDefault()
                    updateNote({...note, title, content})
                    setIsEditing(false)
                }}
                className="space-y-4"
            >
                <input 
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                    className="w-full border rounded p-2"
                />
                <textarea
                    value = {content}
                    onChange= {(e) => setContent(e.target.value)}
                    className="w-full border rounded p-2"
                    rows={6}
                />
                <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </div>
            </form>
        ) : (
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
            <CardFooter className='grid grid-flow-col justify-end gap-2'>
                {/* Edit Button */}
                <Button
                    variant='outline'
                    size='icon'
                    className="text-blue-500 hover:bg-blue-100 cursor-pointer"
                    onClick={handleEdit}
                >
                    <Pencil />
                </Button>

                {/* Delete Button */}
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            variant = 'outline'
                            size='icon'
                            className="text-red-500 hover:bg-red-100 cursor-pointer">
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
                                onClick={() => {
                                    handleDelete(note.id)
                                    router.push('/')
                                }}>
                                Yes, delete it
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardFooter>
        </Card>
        )}
    </div>                      
    )
}