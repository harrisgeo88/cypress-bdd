import React, { useState } from 'react'
import { InputText } from '../../components/InputText'
import { Layout, Wrapper } from '../../components/Layout'
import { Button } from '../../components/Button'
import { submitLogin } from './Login.utils'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleClick = () => {
    if (submitLogin(username, password)) {
      setLoggedIn(true)
    }
  }

  // const handleClick = () => {
  //   if (username === 'harrisgeo88' && password === 'pass') {
  //     setLoggedIn(true)
  //   }
  // }

  return (
    <Layout>
      <Wrapper>
        {!loggedIn && (
          <>
            <InputText
              placeholder='Username'
              data-testid='username'
              value={username}
              onChange={value => setUsername(value)}
            />
            <InputText
              type='password'
              data-testid='password'
              placeholder='Password'
              value={password}
              onChange={value => setPassword(value)}
            />
            <Button data-testid='submit' onClick={handleClick}>
              Submit
            </Button>
          </>
        )}
        {loggedIn && (
          <>
            <div data-testid='loggedin'>You are logged in</div>
          </>
        )}
      </Wrapper>
      <div></div>
    </Layout>
  )
}
