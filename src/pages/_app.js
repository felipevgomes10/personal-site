import React from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles'
import { theme } from '../themes/primary'
import PageHeader from '../components/Header/PageHeader'

export default function App({ Component, pageProps }) {
  const { data } = useSWR(
    'https://api.github.com/users/felipevgomes10',
    async () => {
      const response = await fetch(
        'https://api.github.com/users/felipevgomes10'
      )
      const data = await response.json()
      return data
    }
  )

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PageHeader userData={data} />
        <Component {...pageProps} userData={data} />
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}
