import React from 'react'
import { Header } from './PageHeaderStyles'
import Logo from '../../../public/logo.svg'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from '../Helpers/Image/Image'

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
  userData: PropTypes.object
}
