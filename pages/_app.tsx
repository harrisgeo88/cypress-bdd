import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { MyGlobalStyle } from '../src/components/Layout'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <MyGlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
