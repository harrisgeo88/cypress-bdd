import styled, { createGlobalStyle } from 'styled-components'

export const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
  }
`

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  padding: 50px;
  background: white;
  margin: 20px;
  border: 1px solid black;
  border-radius: 5px;
`
