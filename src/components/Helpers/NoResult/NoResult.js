import React from 'react'
import { NoResultBtn } from './NoResultStyles'
import PropTypes from 'prop-types'

const NoResult = ({ children, onClick }) => {
  return <NoResultBtn onClick={onClick}>{children}</NoResultBtn>
}

export default NoResult

NoResult.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
}
