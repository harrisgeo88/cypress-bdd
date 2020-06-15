import { Button } from './Button'
import { render } from '@testing-library/react'

describe('given an `Button` component', () => {
  describe('when it is rendered', () => {
    it('should match snapshot', () => {
      const { container } = render(<Button onClick={jest.fn()}>Go</Button>)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
