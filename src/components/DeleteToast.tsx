'use client'

import { useEffect, useState } from 'react'
import { Note } from '@/types'
import { motion } from 'framer-motion'

interface DeleteToastProps {
    note: Note
    onUndo: (note: Note) => void
    onDismiss: () => void
}

export default function DeleteToast({ note, onUndo, onDismiss }: DeleteToastProps) {
    const [progress, setProgress] = useState(100)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const start = Date.now()
        const duration = 5000 // 5 seconds

        const interval = setInterval(() => {
            const elapsed = Date.now() - start
            const remaining = Math.max(0, 100 - (elapsed / duration) * 100)
            setProgress(remaining)
            
            if (elapsed >= duration) {
                clearInterval(interval)
                setIsVisible(false)
                setTimeout(() => {
                    onDismiss()
                }, 300)
            }
        }, 20)

        return () => clearInterval(interval)
    }, [onDismiss])

    const handleUndo = () => {
        onUndo(note)
        setIsVisible(false)
        setTimeout(() => {
            onDismiss()
        }, 300)
    }

    return (
        <>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999]"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-2 w-[320px]">
                        <div className="flex-1">
                            <p className="text-sm font-medium">Note moved to trash</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Undo within 5 seconds</p>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-blue-500"
                                initial={{ width: '100%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                            <button
                                onClick={handleUndo}
                                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                            >
                                Undo
                            </button>
                            <button
                                onClick={() => {
                                    setIsVisible(false)
                                    setTimeout(() => {
                                        onDismiss()
                                    }, 300)
                                }}
                                className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                Dismiss
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
} 