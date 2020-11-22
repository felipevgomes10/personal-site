import React from 'react'
import { LoadMoreBtn } from './LoadMoreStyles'
import PropTypes from 'prop-types'

const LoadMore = ({ children, onClick }) => {
  return <LoadMoreBtn onClick={onClick}>{children}</LoadMoreBtn>
}

export default LoadMore

LoadMore.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
}
