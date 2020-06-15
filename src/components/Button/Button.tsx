import React from 'react'
import { ButtonWrapper } from './Button.styles'
import { ButtonProps } from './Button.models'

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>
}
