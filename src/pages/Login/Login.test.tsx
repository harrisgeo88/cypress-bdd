import { Login } from './Login'
import { render } from '@testing-library/react'

describe('given an `Login` component', () => {
  describe('when it is rendered', () => {
    it('should match snapshot', () => {
      const { container } = render(<Login />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
