import { ReactChild, HTMLProps } from 'react'

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  onClick: () => void
  children: ReactChild
}
