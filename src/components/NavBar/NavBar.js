import React, { useEffect, useRef } from 'react'
import { Nav } from './NavBarStyles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const NavBar = ({ login }) => {
  const { pathname } = useRouter()
  const NavBarRef = useRef(null)

  useEffect(() => {
    const links = [...NavBarRef.current.children]

    links.forEach(link => {
      const attribute = link.getAttribute('href')
      if (attribute === pathname) link.classList.add('active')
      else link.classList.remove('active')
    })
  }, [pathname])

  return (
    <Nav>
      <div className="NavBarWrapper" ref={NavBarRef}>
        <Link href="/">
          <a>Início</a>
        </Link>
        <Link href="/projects">
          <a>Projetos</a>
        </Link>
        <Link href="/about">
          <a>Sobre</a>
        </Link>
        <Link href="/contact">
          <a>Contato</a>
        </Link>
        {login && (
          <Link href="/adm/add-project">
            <a>Incluir Projeto</a>
          </Link>
        )}
      </div>
    </Nav>
  )
}

export default NavBar

NavBar.propTypes = {
  login: PropTypes.bool
}
