import React from 'react'
import { InputTextWrapper, Input } from './InputText.components'
import { InputTextProps } from './InputText.models'

export const InputText = ({ onChange, ...rest }: InputTextProps) => {
  const handleChange = (e) => {
    const target = e.target as HTMLInputElement
    onChange && onChange(target.value)
  }

  return (
    <InputTextWrapper>
      <Input {...rest} onChange={handleChange} />
    </InputTextWrapper>
  )
}
