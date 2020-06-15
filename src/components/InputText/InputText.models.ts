// interface HTMLInput extends React.HTMLProps<HTMLInputElement> {}

type CustomHTMLInput = Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>

export interface InputTextProps extends CustomHTMLInput {
  value: string
  onChange: (value: string) => void
}
