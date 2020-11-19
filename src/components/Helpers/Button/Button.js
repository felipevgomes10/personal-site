import React from 'react'
import PropTypes from 'prop-types'
import { Btn } from './ButtonStyles'

const Button = ({ children, margin, ...props }) => {
  return (
    <Btn margin={margin} {...props}>
      {children}
    </Btn>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  margin: PropTypes.string
}
