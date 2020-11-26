import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles'
import { theme } from '../themes/primary'
import PageHeader from '../components/Header/PageHeader'
import NavBar from '../components/NavBar/NavBar'
import PageFooter from '../components/Footer/PageFooter'
import useFetch from '../hooks/useFetch'
import { TOKEN_VALIDATE, USER_GET } from '../endpoints'

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState(null)
  const [login, setLogin] = useState(false)
  const { request } = useFetch()
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

  useEffect(() => {
    const autoLogin = async () => {
      const userToken = window.localStorage.getItem('userToken')
      const { url, options } = TOKEN_VALIDATE(userToken)
      const { response } = await request(url, options)
      if (response.ok) {
        setLogin(true)
        const { url, options } = USER_GET(userToken)
        const { json } = await request(url, options)
        setUser(json)
      }
    }
    autoLogin()
  }, [request])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PageHeader userData={data} login={login} setLogin={setLogin} />
        <NavBar login={login} setLogin={setLogin} />
        <Component
          {...pageProps}
          login={login}
          setLogin={setLogin}
          user={user}
          setUser={setUser}
        />
        <PageFooter />
      </ThemeProvider>
    </>
  )
}

export default App

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}
