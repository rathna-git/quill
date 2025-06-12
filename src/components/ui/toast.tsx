'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ToastProps {
  message: string
  isVisible: boolean
  className?: string
}

export function Toast({ message, isVisible, className }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
          className={cn(
            "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]",
            className
          )}
        >
          <div className="bg-background border border-border shadow-lg rounded-lg p-4 min-w-[320px]">
            <p className="text-foreground text-sm font-medium text-center">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface DeleteToastProps {
  message: string
  subMessage?: string
  progress: number
  isVisible: boolean
  onUndo?: () => void
  onDismiss?: () => void
}

export function DeleteToast({ message, subMessage, progress, isVisible, onUndo, onDismiss }: DeleteToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
        >
          <div className="bg-background border border-border shadow-lg rounded-lg p-4 min-w-[320px]">
            <div className="flex flex-col gap-2">
              <div className="flex-1">
                <p className="text-foreground text-sm font-medium">{message}</p>
                {subMessage && (
                  <p className="text-muted-foreground text-xs">{subMessage}</p>
                )}
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: '100%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="flex items-center gap-2 mt-2">
                {onUndo && (
                  <button
                    onClick={onUndo}
                    className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                  >
                    Undo
                  </button>
                )}
                {onDismiss && (
                  <button
                    onClick={onDismiss}
                    className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Dismiss
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 