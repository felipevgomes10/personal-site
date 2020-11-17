import React from 'react'
import { Header } from './PageHeaderStyles'
import Logo from '../../../public/logo.svg'
import Link from 'next/link'
import PropTypes from 'prop-types'

const PageHeader = ({ userData }) => {
  return (
    <Header>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div className="headerAdm">
        <p>Administrador</p>
        <img
          className="avatar"
          src={userData && userData.avatar_url}
          alt={userData && userData.name}
        />
      </div>
    </Header>
  )
}

export default PageHeader

PageHeader.propTypes = {
  userData: PropTypes.object
}
