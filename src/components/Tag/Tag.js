import React from 'react'
import PropTypes from 'prop-types'
import { TagItem } from './TagStyles'

const Tag = ({ children }) => {
  return <TagItem>{children}</TagItem>
}

export default Tag

Tag.propTypes = {
  children: PropTypes.string.isRequired
}
