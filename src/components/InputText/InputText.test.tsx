import { InputText } from './InputText'
import { render, fireEvent } from '@testing-library/react'

describe('given an `InputText` component', () => {
  describe('when it is rendered', () => {
    it('should match snapshot', () => {
      const { container } = render(<InputText value="" onChange={jest.fn()} />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  describe('when its text changes', () => {
    it('should return its value with `onChange`', () => {
      let inputValue = ''
      const props = {
        value: '',
        'data-testid': 'input',
        onChange: (value) => {
          inputValue = value
        },
      }
      const { rerender, getByTestId } = render(<InputText {...props} />)
      const Input = getByTestId('input')
      fireEvent.change(Input, {
        target: { value: 'some input' },
      })
      rerender(<InputText {...props} value="some input" />)
      expect(inputValue).toEqual('some input')
    })
  })
})
