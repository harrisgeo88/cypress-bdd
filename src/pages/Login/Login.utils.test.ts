import { submitLogin } from './Login.utils'

describe('given a `submitLogin` util', () => {
  describe('when we pass ivvalid details', () => {
    it('should return true', () => {
      expect(submitLogin('harrisgeo88', 'pass1')).toEqual(false)
    })
  })
  describe('when we pass valid details', () => {
    it('should return true', () => {
      expect(submitLogin('harrisgeo88', 'pass')).toEqual(true)
    })
  })
  describe('when we pass valid `admin` details', () => {
    it('should return true', () => {
      expect(submitLogin('admin', 'pass')).toEqual(true)
    })
  })
})
