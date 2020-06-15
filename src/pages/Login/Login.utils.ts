export const submitLogin = (username: string, password: string): Boolean => {
  if (username === 'master' && password === 'pass') {
    return true
  }
  if (username === 'harrisgeo88' && password === 'pass') {
    return true
  }

  return false
}
