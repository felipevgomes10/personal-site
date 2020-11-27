import React, { useCallback, useEffect, useRef } from 'react'
import { Header } from './PageHeaderStyles'
import Logo from '../../../public/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Image from '../Helpers/Image/Image'
import useMedia from '../../hooks/useMedia'

const PageHeader = ({ userData, login, setLogin }) => {
  const admLink = useRef(null)
  const { pathname, push } = useRouter()
  const tablet = useMedia('(max-width: 50em)')

  useEffect(() => {
    if (admLink && admLink.current) {
      const attribute = admLink.current.getAttribute('href')
      if (attribute === pathname) admLink.current.classList.add('active')
      else admLink.current.classList.remove('active')
    }
  }, [pathname])

  const handleLogout = useCallback(() => {
    window.localStorage.removeItem('userToken')
    setLogin(false)
    push('/')
  }, [push, setLogin])

  return (
    <Header>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div className="headerAdm">
        {login && !tablet ? (
          <>
            <p>Bem vindo, Felipe /</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link href="/adm">
            <a ref={admLink}>Administrador</a>
          </Link>
        )}
        <Image
          className="avatar"
          alt={userData && userData.name}
          src={userData && userData.avatar_url}
        />
      </div>
    </Header>
  )
}

export default PageHeader

PageHeader.propTypes = {
  userData: PropTypes.object,
  login: PropTypes.bool,
  setLogin: PropTypes.func
}
