import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: '100vh',
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

export const ToastProvider = styled(Toast.Provider, {})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '25px',
  gap: '10px',
  width: '22.5rem',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 999,
  outline: 'none',
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  fontFamily: '$default',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '12px 20px',
  borderRadius: '$sm',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out;`,
  },

  '&[data-swipe="move"]': {
    transform: `translateX(var(--radix-toast-swipe-move-x))`,
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: `transform 200ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: 700,
  fontSize: '$xl',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  justifyContent: 'space-between',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
})

export const ToastClose = styled(Toast.Close, {
  cursor: 'pointer',
})

export const ToastButton = styled('button', {
  color: '$white',
  fontSize: '$2xl',
  border: 'none',
  backgroundColor: '$gray600',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '1rem 1.625rem 1rem 1.625rem',
  borderRadius: '$md',
})
