import { keyframes, styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateX(2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  },
})

export const Provider = styled(Tooltip.Provider, {})
export const Root = styled(Tooltip.Root, {})
export const Trigger = styled(Tooltip.Trigger, {})
export const Portal = styled(Tooltip.Portal, {})

export const TooltipContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: '100vh',
})

export const Content = styled(Tooltip.Content, {
  borderRadius: '$xs',
  padding: '0.85rem 1rem',
  fontSize: '$sm',
  color: '$white',
  backgroundColor: '$gray900',
  fontFamily: '$default',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: ' cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: slideDownAndFade,
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: slideLeftAndFade,
  },

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: slideUpAndFade,
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: slideRightAndFade,
  },
})

export const TooltipButton = styled('button', {
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

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
