import { PlusCircle } from 'phosphor-react'
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
  TooltipContainer,
  TooltipButton,
} from './styles'

export interface TooltipProps {
  text: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
}

export function Tooltip({ text, side, align }: TooltipProps) {
  return (
    <TooltipContainer>
      <Provider>
        <Root>
          <Trigger asChild>
            <TooltipButton>
              <PlusCircle />
            </TooltipButton>
          </Trigger>
          <Portal>
            <Content side={side} align={align} sideOffset={5}>
              {text}
              <Arrow />
            </Content>
          </Portal>
        </Root>
      </Provider>
    </TooltipContainer>
  )
}
