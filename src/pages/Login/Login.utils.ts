export const submitLogin = (username: string, password: string): boolean => {
  if (username === 'admin' && password === 'pass') {
    return true
  }
  if (username === 'harrisgeo88' && password === 'pass') {
    return true
  }

  return false
}
