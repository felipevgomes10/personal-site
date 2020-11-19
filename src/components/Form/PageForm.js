import React from 'react'
import PropTypes from 'prop-types'

const PageForm = ({ handleSubmit, className, children }) => {
  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  )
}

export default PageForm

PageForm.propTypes = {
  handleSubmit: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType])
}
