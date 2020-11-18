import React, { useContext } from 'react'
import { Nav } from './NavBarStyles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ThemeContext } from 'styled-components'

const NavBar = () => {
  const { pathname } = useRouter()
  const { colors } = useContext(ThemeContext)

  return (
    <Nav>
      <div className="NavBarWrapper">
        <Link href="/">
          <a style={pathname === '/' ? { color: colors.primary } : ''}>
            Início
          </a>
        </Link>
        <Link href="/">
          <a>Projetos</a>
        </Link>
        <Link href="/">
          <a>Sobre</a>
        </Link>
        <Link href="/">
          <a>Contato</a>
        </Link>
      </div>
    </Nav>
  )
}

export default NavBar
