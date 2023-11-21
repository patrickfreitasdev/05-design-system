import React from 'react'
import { PlusCircle, X } from 'phosphor-react'
import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
  ToastContainer,
  ToastButton,
} from './styles'

export interface ToastProps {
  title: string
  description: string
  duration?: number
  swipeDirection?: 'left' | 'right' | 'up' | 'down'
}

export function Toast({
  title,
  description,
  duration = 3000,
  swipeDirection = 'right',
}: ToastProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <ToastContainer>
      <ToastProvider duration={duration} swipeDirection={swipeDirection}>
        <ToastButton
          onClick={() => {
            setOpen(true)
          }}
        >
          <PlusCircle />
        </ToastButton>
        <ToastRoot open={open} onOpenChange={setOpen}>
          <ToastTitle>
            {title}
            <ToastClose asChild>
              <X />
            </ToastClose>
          </ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </ToastRoot>

        <ToastViewport />
      </ToastProvider>
    </ToastContainer>
  )
}
