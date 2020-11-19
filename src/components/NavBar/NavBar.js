import React, { useEffect, useRef } from 'react'
import { Nav } from './NavBarStyles'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = () => {
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
        <Link href="#">
          <a>Projetos</a>
        </Link>
        <Link href="#">
          <a>Sobre</a>
        </Link>
        <Link href="#">
          <a>Contato</a>
        </Link>
      </div>
    </Nav>
  )
}

export default NavBar
