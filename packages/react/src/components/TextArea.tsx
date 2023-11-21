import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white100',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 'none',
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    outline: 'none',
    borderColor: '$ignite300',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = React.ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'
