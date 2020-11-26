import React, { useCallback, useEffect, useRef } from 'react'
import { Nav } from './NavBarStyles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useMedia from '../../hooks/useMedia'
import About from '../../../public/about.svg'
import Add from '../../../public/add.svg'
import Adm from '../../../public/adm.svg'
import Contact from '../../../public/contact.svg'
import Home from '../../../public/home.svg'
import Project from '../../../public/project.svg'
import Logout from '../../../public/logout.svg'
import PropTypes from 'prop-types'

const NavBar = ({ login, setLogin }) => {
  const { pathname, push } = useRouter()
  const NavBarRef = useRef(null)
  const BtnMobileRef = useRef(null)
  const mobile = useMedia('(max-width: 31.25em)')

  const toggleClasses = () => {
    NavBarRef.current.classList.toggle('NavBarWrapperActive')
    BtnMobileRef.current.classList.toggle('NavBarBtnActive')
  }

  useEffect(() => {
    const svgs = document.querySelectorAll('.NavBarSvg')
    if ((mobile && login) || mobile) {
      svgs.forEach(svg => svg.classList.add('NavBarShowSvg'))
    } else {
      svgs.forEach(svg => svg.classList.remove('NavBarShowSvg'))
    }
  }, [mobile, login])

  useEffect(() => {
    if (NavBarRef.current && BtnMobileRef.current) {
      NavBarRef.current.classList.remove('NavBarWrapperActive')
      BtnMobileRef.current.classList.remove('NavBarBtnActive')
    }
  }, [pathname])

  useEffect(() => {
    const links = [...NavBarRef.current.children]

    links.forEach(link => {
      const attribute = link.getAttribute('href')
      if (attribute === pathname) link.classList.add('active')
      else link.classList.remove('active')
    })
  }, [pathname])

  const handleMobileMenu = useCallback(() => {
    toggleClasses()
  }, [])

  const handleLogout = useCallback(() => {
    window.localStorage.removeItem('userToken')
    setLogin(false)
    push('/')
  }, [setLogin, push])

  return (
    <Nav>
      <div className="NavBarWrapper" ref={NavBarRef}>
        <Link href="/">
          <a>
            <Home className="NavBarSvg" />
            Início
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <Project className="NavBarSvg" />
            Projetos
          </a>
        </Link>
        <Link href="/about">
          <a>
            <About className="NavBarSvg" />
            Sobre
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Contact className="NavBarSvg" />
            Contato
          </a>
        </Link>
        {login && (
          <Link href="/adm/add-project">
            <a>
              <Add className="NavBarSvg" />
              Incluir Projeto
            </a>
          </Link>
        )}
        {mobile && !login && (
          <Link href="/adm">
            <a>
              <Adm className="NavBarSvg" />
              Administrador
            </a>
          </Link>
        )}
        {mobile && login && (
          <button onClick={handleLogout}>
            <Logout className="NavBarSvg" />
            Sair
          </button>
        )}
      </div>
      {mobile && (
        <button
          onClick={handleMobileMenu}
          className="NavBarMobile"
          ref={BtnMobileRef}
        >
          <span></span>
        </button>
      )}
    </Nav>
  )
}

export default NavBar

NavBar.propTypes = {
  login: PropTypes.bool,
  setLogin: PropTypes.func
}
