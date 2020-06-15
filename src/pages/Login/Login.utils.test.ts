import { submitLogin } from './Login.utils'

describe('given a `submitLogin` util', () => {
  describe('when it is called with incorrect details', () => {
    it('should return false', () => {
      expect(submitLogin('user', 'pass')).toEqual(false)
    })
  })
  describe('when it is called with `master` details', () => {
    it('should return false', () => {
      expect(submitLogin('master', 'pass')).toEqual(true)
    })
  })
  describe('when it is called with the correct details', () => {
    it('should log us in', () => {
      expect(submitLogin('harrisgeo88', 'pass')).toEqual(true)
    })
  })
})
